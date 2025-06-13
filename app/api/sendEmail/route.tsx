import { NextRequest, NextResponse } from "next/server";
import {Resend} from "resend";
import ContactEmail from "@/app/utils/emails/contactEmail";

export async function POST(request: NextRequest) {
    const {name, email, subject, message} = await request.json();
    const resend = new Resend(process.env.RESEND_API);
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'robert.chung149@gmail.com',
      subject: subject,
      react: (<ContactEmail name={name} email={email} subject={subject} message={message}></ContactEmail>)
    });
    return NextResponse.json({message: "hello"}, {status: 200});
}