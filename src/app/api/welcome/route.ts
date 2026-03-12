import { NextRequest, NextResponse } from "next/server";
import { logApiRequest } from "@/lib/logger";

export async function GET(request: NextRequest) {
  // Log the request with method and path
  logApiRequest(request.method, request.url);

  // Return JSON response with welcome message
  return NextResponse.json({
    message: "Welcome to the API!",
    metadata: {
      method: request.method,
      path: request.url,
    },
  });
}
