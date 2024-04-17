import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server";
/**
 * Retrieves a list of all projects from the database.
 * @returns {Promise<NextResponse>} A JSON response containing an array of all projects.
 */
export async function GET() {
  return NextResponse.json(await prisma.project.findMany());
}
