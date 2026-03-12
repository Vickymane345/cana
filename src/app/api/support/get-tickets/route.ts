import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@lib/prisma";
import { withAuth } from "@lib/middleware";

export const GET = withAuth(async (req: NextRequest, user) => {
  try {
    const parsedUserId = parseInt(user.userId);
    if (isNaN(parsedUserId)) {
      return NextResponse.json(
        { error: "Invalid user ID from token" },
        { status: 400 }
      );
    }

    // Get tickets for the authenticated user
    const tickets = await prisma.ticket.findMany({
      where: {
        userId: parsedUserId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    // Process tickets to add message count and last message info
    const processedTickets = await Promise.all(
      tickets.map(async (ticket) => {
        const messages = await prisma.message.findMany({
          where: { ticketId: ticket.id },
          orderBy: { createdAt: "asc" },
          include: {
            sender: true,
          },
        });

        const messageCount = messages.length;
        const lastMessage = messageCount > 0 ? messages[messages.length - 1] : null;
        const hasUnread = messageCount > 0 && lastMessage?.senderId !== parsedUserId;

        return {
          id: ticket.id,
          subject: ticket.subject,
          status: ticket.status,
          createdAt: ticket.createdAt,
          updatedAt: ticket.updatedAt,
          messageCount,
          hasUnread,
          lastMessage: lastMessage ? {
            sender: lastMessage.senderId === parsedUserId ? 'user' : 'support',
            content: lastMessage.content,
            timestamp: lastMessage.createdAt.toISOString(),
          } : null,
        };
      })
    );

    return NextResponse.json({
      success: true,
      tickets: processedTickets,
    });
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return NextResponse.json(
      { error: "Failed to fetch tickets" },
      { status: 500 }
    );
  }
});
