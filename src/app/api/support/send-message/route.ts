import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

interface SendMessageRequest {
  ticketId: number;
  senderId: number;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: SendMessageRequest = await request.json();
    const { ticketId, senderId, message } = body;

    // Input validation
    if (!ticketId || typeof ticketId !== "number" || ticketId <= 0) {
      return NextResponse.json(
        { error: "Valid ticket ID is required" },
        { status: 400 }
      );
    }

    if (!senderId || typeof senderId !== "number") {
      return NextResponse.json(
        { error: "Invalid senderId" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string" },
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

    // Verify ticket exists
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      select: { id: true, status: true, userId: true },
    });

    if (!ticket) {
      return NextResponse.json(
        { error: "Ticket not found" },
        { status: 404 }
      );
    }

    // Optional: Check if ticket is closed (prevent sending messages to closed tickets)
    if (ticket.status === "closed") {
      return NextResponse.json(
        { error: "Cannot send messages to closed tickets" },
        { status: 400 }
      );
    }

    // Create new message record
    const newMessage = await prisma.message.create({
      data: {
        ticketId,
        senderId,
        content: message.trim(),
      },
      include: {
        sender: true,
      },
    });

    // Update ticket's updatedAt timestamp
    await prisma.ticket.update({
      where: { id: ticketId },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({
      success: true,
      message: newMessage,
      responseMessage: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error sending message:", error);

    // Handle Prisma-specific errors
    if (error instanceof Error) {
      if (error.message.includes("Foreign key constraint failed")) {
        return NextResponse.json(
          { error: "Invalid ticket reference" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
