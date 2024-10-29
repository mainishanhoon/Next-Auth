import {
  Body,
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

export default function OTPVerificationTemplate(OTP: string) {
  return (
    <Html>
      <Head />
      <Preview>Your OTP for account verification</Preview>
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
          <Heading style={h1}>Account Verification</Heading>
          <Text style={text}>
            Thank you for signing up. To complete your account verification,
            please use the following One-Time Password (OTP):
          </Text>
          <Section style={otpContainer}>
            <Text style={otpText}>{OTP}</Text>
          </Section>
          <Text style={text}>
            This OTP is valid for 10 minutes. If you didn't request this
            verification, please ignore this email.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            This email was sent by NextAuth. If you have any concerns, please
            contact our support team.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#F8F9FC',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
};

const container = {
  backgroundColor: '#FFFFFF',
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
  color: '#020817',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center' as const,
};

const text = {
  color: '#020817',
  fontSize: '16px',
  lineHeight: '26px',
  textAlign: 'center' as const,
};

const otpContainer = {
  margin: '32px 0',
  textAlign: 'center' as const,
};

const otpText = {
  color: '#3B82F6',
  fontSize: '36px',
  fontWeight: 'bold',
  letterSpacing: '8px',
  margin: '0',
};

const hr = {
  borderColor: '#E2E8F0',
  margin: '20px 0',
};

const footer = {
  color: '#64748B',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
};
