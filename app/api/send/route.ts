import ResetPasswordTemplate from '@/components/email/ResetPasswordTemplate';
import VerificationTemplate from '@/components/email/VerificationTemplate';
import OTPVerificationTemplate from '@/components/email/OTPVerificationTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(
  name: string | null,
  email: string,
  token: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Next-Auth_v5 <onboarding@resend.dev>',
      to: email,
      subject: `${name}!! Verify Email`,
      react: VerificationTemplate(name, token),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendResetPasswordEmail(email: string, token: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Next-Auth_v5 <onboarding@resend.dev>',
      to: email,
      subject: `Reset your Password`,
      react: ResetPasswordTemplate(token),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendTwoFactorAuthenticationEmail(
  email: string,
  token: string,
) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Next-Auth_v5 <onboarding@resend.dev>',
      to: email,
      subject: `Two-Factor Authenticaation (2FA)`,
      react: OTPVerificationTemplate(token),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
