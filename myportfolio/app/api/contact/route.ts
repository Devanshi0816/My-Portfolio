import { PrismaClient } from "../../../lib/generated/prisma"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message } = body

  // Save to DB
  await prisma.contact.create({
    data: { name, email, subject, message },
  })

  // Send email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: `New Message: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
