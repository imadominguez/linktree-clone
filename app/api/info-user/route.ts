import { NextResponse, NextRequest } from "next/server";
import { db } from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    //
    const { userId: id } = getAuth(req);

    if (!id) {
      return NextResponse.json(
        { message: "Unaunthorized" },
        { status: 400 }
      );
    }

    let existingUser = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        links: true,
      },
    });

    if (!existingUser) {
      existingUser = await db.user.create({
        data: {
          id,
          name: "User",
          username: `user_${Date.now()}`,
          links: {
            create: [],
          },
        },
        include: {
          links: true,
        },
      });
    }

    return NextResponse.json(existingUser);
  } catch (error) {
    console.log("[GET_USER_LOGIN]", error);
    return NextResponse.json(
      { message: "Error en el fetching de datos" },
      { status: 500 }
    );
  }
}
