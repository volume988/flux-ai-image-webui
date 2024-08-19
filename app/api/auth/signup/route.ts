import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, username, password } = await request.json();

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "password length should be more than 6 characters",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);

    // 查询用户是否存在
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    try {
      const user = await prisma.user.create({
        data: { email, name: username, password: hashedPassword },
      });
      delete user.password;
      return NextResponse.json({ success: true, user }, { status: 201 });
    } catch (e: any) {
      return NextResponse.json(
        {
          success: false,
          message: e.message,
        },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 }
    );
  }
}
