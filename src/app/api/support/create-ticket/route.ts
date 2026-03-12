import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@lib/prisma";
import { withAuth } from "@lib/middleware";

interface CreateTicketRequest {
  subject: string;
  message: string;
}

export const POST = withAuth(async (req: NextRequest, user) => {
  try {
    const body: CreateTicketRequest = await req.json();
    const { subject, message } = body;

    // Input validation
    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json(
        { error: "Subject is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    // Validate subject length (reasonable limit)
    if (subject.length > 255) {
      return NextResponse.json(
        { error: "Subject must be less than 255 characters" },
        { status: 400 }
      );
    }

    // Validate message length (reasonable limit)
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be less than 5000 characters" },
        { status: 400 }
      );
    }

    const parsedUserId = parseInt(user.userId);
    if (isNaN(parsedUserId) || parsedUserId <= 0) {
      console.error("Invalid userId from token:", user.userId, typeof user.userId);
      return NextResponse.json(
        { error: "Invalid user ID from token" },
        { status: 400 }
      );
    }

    // Verify user exists
    const dbUser = await prisma.user.findUnique({
      where: { id: parsedUserId },
      select: { id: true, email: true }, // Only select needed fields
    });

    if (!dbUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Create ticket with initial message using nested create
    const ticket = await prisma.ticket.create({
      data: {
        userId: parsedUserId,
        subject: subject.trim(),
        messages: {
          create: {
            senderId: parsedUserId,
            content: message.trim(),
          },
        },
      },
      select: {
        id: true,
        subject: true,
        status: true,
        createdAt: true,
        messages: {
          include: {
            sender: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      ticket: {
        id: ticket.id,
        subject: ticket.subject,
        status: ticket.status,
        createdAt: ticket.createdAt,
        messages: ticket.messages,
      },
      message: "Ticket created successfully",
    });
  } catch (error) {
    console.error("Error creating ticket:", error);

    // Handle Prisma-specific errors
    if (error instanceof Error) {
      if (error.message.includes("Foreign key constraint failed")) {
        return NextResponse.json(
          { error: "Invalid user reference" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to create ticket. Please try again." },
      { status: 500 }
    );
  }
});
