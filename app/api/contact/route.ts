import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// כאן את תשימי את ה-API Key שלך מ-Resend בהמשך
const resend = new Resend(process.env.RESEND_API_KEY); // תחליפי ב-API Key שלך מ-Resend

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Philipp Handcrafted <onboarding@resend.dev>', // בשלב החינמי זה המייל השולח
      to: ['advacohen111@gmail.com'], // פה תכתבי את המייל שלך שבו תרצי לקבל את הפניות
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>פנייה חדשה מהאתר של Philipp</h2>
        <p><strong>שם:</strong> ${name}</p>
        <p><strong>אימייל:</strong> ${email}</p>
        <p><strong>טלפון:</strong> ${phone}</p>
        <p><strong>הודעה:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}