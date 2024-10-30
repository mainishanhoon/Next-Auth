import ResetPasswordTemplate from '@/components/email/ResetPasswordTemplate';
import VerificationTemplate from '@/components/email/VerificationTemplate';
import OTPVerificationTemplate from '@/components/email/OTPVerificationTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { type, name, email, token } = await req.json();

    let subject = '';
    let template;

    switch (type) {
      case 'verification':
        subject = `${name}!! Verify Email`;
        template = VerificationTemplate(name, token);
        break;
      case 'resetPassword':
        subject = 'Reset your Password';
        template = ResetPasswordTemplate(token);
        break;
      case 'twoFactorAuth':
        subject = 'Two-Factor Authentication (2FA)';
        template = OTPVerificationTemplate(token);
        break;
      default:
        return new Response(
          JSON.stringify({ error: 'Invalid email type provided' }),
          { status: 400 },
        );
    }

    const { data, error } = await resend.emails.send({
      from: 'Next-Auth_v5 <onboarding@resend.dev>',
      to: email,
      subject,
      react: template,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  }
}
