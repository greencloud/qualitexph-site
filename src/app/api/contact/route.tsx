import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  // Anti-spam: Honeypot check
  if (formData.get("company")) {
    return NextResponse.json(
      { message: "Spam detected." },
      { status: 400 }
    );
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Missing required fields." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailBody = `
From: ${email}
Subject: ${subject}
Message: ${message}
`;

  try {
    await transporter.sendMail({
      to: process.env.CONTACT_RECEIVER_EMAIL,
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      subject: subject,
      text: mailBody,
    });

    return NextResponse.json({
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send message." },
      { status: 500 }
    );
  }
}
