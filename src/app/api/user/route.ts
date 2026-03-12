import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { UserService } from "@/lib/services/userService";

// GET endpoint for current user data (with referral code)
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Use the updated getUserByEmail that includes referral code
    const user = await UserService.getUserByEmail(session.user.email);

    return NextResponse.json(user);
  } catch (error: any) {
    console.error("Error fetching user:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST endpoint for refreshing user data (keep existing)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Use the updated getUserByEmail
    const user = await UserService.getUserByEmail(session.user.email);

    return NextResponse.json({
      user: user
    });
  } catch (error: any) {
    console.error("Error refreshing user:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
