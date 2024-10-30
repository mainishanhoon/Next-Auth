import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export default function VerificationTemplate(
  name: string | null | undefined,
  token: string,
) {
  const domain = process.env.NEXT_PUBLIC_APP_URL;

  const magicLink = `${domain}/auth/verification?token=${token}`;

  return (
    <Html>
      <Head />
      <Preview>Verify your account with this magic link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://i.ibb.co/nz5P8S3/Logo.webp"
            width="50"
            height="50"
            alt="Logo"
            style={logo}
          />
          <Img
            src="https://i.ibb.co/6FzgB5L/Cover.webp"
            width="640"
            height="320"
            alt="Cover"
            style={cover}
          />
          <Heading style={h1}>Welcome, {name}!</Heading>
          <Text style={text}>
            We're excited to have you on board. To get started, please verify
            your account by clicking the button below.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={magicLink}>
              Verify Your Account
            </Button>
          </Section>
          <Text style={text}>
            If the button doesn't work, you can also click on this link:
            <br />
            <a href={magicLink} style={link}>
              {magicLink}
            </a>
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            This email was sent by Next-Auth made by @mainishanhoon. If you
            didn't request this email, you can safely ignore it.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#F8F9FC', // --secondary
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
};

const container = {
  backgroundColor: '#FFFFFF', // --background
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const logo = {
  margin: '0 auto',
  marginBottom: '24px',
};

const cover = {
  margin: '0 auto',
  marginBottom: '24px',
  borderRadius: '16px',
};

const h1 = {
  color: '#020817', // --foreground
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center' as const,
};

const text = {
  color: '#020817', // --foreground
  fontSize: '16px',
  lineHeight: '26px',
  textAlign: 'center' as const,
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '24px 0',
};

const button = {
  backgroundColor: '#3B82F6', // --primary
  padding: '12px 20px', // Reduced padding for medium size
  borderRadius: '4px',
  color: '#F8FAFC', // --primary-foreground
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block', // Changed from 'block' to 'inline-block'
};

const link = {
  color: '#3B82F6', // --primary
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#E2E8F0', // --border
  margin: '20px 0',
};

const footer = {
  color: '#64748B', // --muted-foreground
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
};
