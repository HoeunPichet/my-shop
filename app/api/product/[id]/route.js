import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET(request, { params }) {
  const id = params.id;
  const products = await prisma.products.findUnique({
    where: {
      product_id: +id,
    },
  });
  return NextResponse.json({
    message: "Get all products successfully!",
    status: 200,
    payload: products,
  });
}
