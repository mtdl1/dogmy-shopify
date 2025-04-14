import { NextResponse } from "next/server";
import { createCustomer } from "lib/shopify";

export async function POST(req: Request) {
  try {
    const { email, phone, password } = await req.json();

    if (!email || !phone) {
      return NextResponse.json(
        { error: "Email and phone are required" },
        { status: 400 }
      );
    }

    const customer = await createCustomer({ email, phone, password });

    return NextResponse.json(customer);
  } catch (error) {
    console.error("Error in create-customer API:", error);

    return NextResponse.json(
      { error: "Failed to create customer" },
      { status: 500 }
    );
  }
}