import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@lib/prisma";
import { Prisma } from "@prisma/client";

type TicketWithMessages = Prisma.TicketGetPayload<{
  include: {
    messages: true;
    user: true;
  };
}>;

interface FormattedMessage {
  id: number;
  ticketId: number;
  sender: string;
  message: string;
  createdAt: Date;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ticketId = searchParams.get("ticketId");

    if (!ticketId) {
      return NextResponse.json(
        { error: "ticketId parameter is required" },
        { status: 400 }
      );
    }

    const ticketIdNum = parseInt(ticketId);
    if (isNaN(ticketIdNum)) {
      return NextResponse.json(
        { error: "Invalid ticketId" },
        { status: 400 }
      );
    }

    // Get ticket with messages
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketIdNum },
      include: {
        messages: true,
        user: true, // Add this to include the user
      },
    }) as TicketWithMessages | null;

    if (!ticket) {
      return NextResponse.json(
        { error: "Ticket not found" },
        { status: 404 }
      );
    }

    // Convert messages from relational data to proper format
    const messages: FormattedMessage[] = ticket.messages.map((msg) => ({
      id: msg.id,
      ticketId: ticket.id,
      sender: msg.senderId === ticket.userId ? 'user' : 'support',
      message: msg.content,
      createdAt: msg.createdAt,
    }));

    return NextResponse.json({
      success: true,
      ticket: {
        id: ticket.id,
        userId: ticket.userId,
        user: ticket.user,
        subject: ticket.subject,
        status: ticket.status,
        createdAt: ticket.createdAt,
        updatedAt: ticket.updatedAt,
      },
      messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
