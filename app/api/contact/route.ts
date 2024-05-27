import mail from "@/app/lib/SendGrid";
import prisma from "@/app/lib/prisma";
import { ContactSchema } from "@/app/Utils/Validation";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles the POST request to the /api/contact endpoint.
 *
 * This function processes a new contact submission, validates the input data using a Zod schema, saves the contact information to the database, and sends an email notification.
 *
 * @param {NextRequest} req - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} - A JSON response indicating whether the contact was saved successfully or an error occurred.
 */
export async function POST(req: NextRequest) {
  try {
    const newContact = await req.json();

    let parsed = ContactSchema.safeParse(newContact);

    if (parsed.success) {
      await mail(parsed.data.Message);
      await prisma.contact.create({
        data: {
          Name: parsed.data.FirstName + parsed.data.LastName,
          Email: parsed.data.Email,
          Message: parsed.data.Message,
        },
      });

      return NextResponse.json({ message: "Contact saved successfully" });
    } else {
      return NextResponse.json({ error: parsed.error.flatten() });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}

/**
 * Handles the GET request to the /api/contact endpoint.
 *
 * This function returns a JSON response indicating that the GET operation is not a valid operation for this endpoint.
 *
 * @returns {Promise<NextResponse>} - A JSON response indicating that the GET operation is not valid.
 */
export async function GET() {
  return NextResponse.json("not an valid operation");
}
