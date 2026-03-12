import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { AuthService } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, privateKey } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  if (!user.privateKeyHash) {
    return NextResponse.json({ error: "No private key found" }, { status: 403 });
  }

  const keyOk = await bcrypt.compare(privateKey, user.privateKeyHash);
  if (!keyOk) {
    return NextResponse.json({ error: "Invalid private key" }, { status: 401 });
  }

  // Now issue session/JWT
  const token = AuthService.generateAccessTokenOnly({
    userId: user.id.toString(),
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
  });

  return NextResponse.json({
    ok: true,
    token: token.accessToken
  });
}
