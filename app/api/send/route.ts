// import VerificationTemplate from '@/components/email/VerificationTemplate';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendVerificationEmail(
//   name: string | null,
//   email: string,
//   token: string,
// ) {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: 'Dev <onboarding@resend.dev>',
//       to: email,
//       subject: 'Confirm your Email',
//       react: VerificationTemplate(name, token),
//     });

//     if (error) {
//       return { error, status: 500 };
//     }

//     return { data, status: 200 };
//   } catch (error) {
//     return { error, status: 500 };
//   }
// }
import VerificationTemplate from '@/components/email/VerificationTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(name: string | null, email: string, token: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Hello world',
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
