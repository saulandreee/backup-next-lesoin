import { getAllCategoriesData } from "@/lib/categories";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await getAllCategoriesData();

  console.log(res);

  return Response.json(res);
}
