import VerificationTemplate from '@/components/email/VerificationTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  name: string | null,
  email: string,
  token: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Dev <onboarding@resend.dev>',
      to: email,
      subject: 'Confirm your Email',
      react: VerificationTemplate(name, token),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
