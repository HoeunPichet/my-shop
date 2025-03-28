import { NextResponse } from "next/server";
import prisma from "../lib/prisma";

export async function GET() {
  const products = await prisma.products.findMany();
  return NextResponse.json({
    message: "Get all products successfully!",
    status: 200,
    payload: products,
  });
}
