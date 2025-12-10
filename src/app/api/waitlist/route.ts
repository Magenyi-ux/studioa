import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'magenyigoodluck12@gmail.com',
        pass: process.env.EMAIL_APP_PASSWORD || 'hnlr elur pvdf immz', // App password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'magenyigoodluck12@gmail.com',
      to: process.env.EMAIL_USER || 'magenyigoodluck12@gmail.com',
      subject: 'New ZediLearn Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
      `,
      text: `
        New Waitlist Signup
        
        Name: ${name}
        Email: ${email}
        Signup Time: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Waitlist signup successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to process waitlist signup' },
      { status: 500 }
    );
  }
}
