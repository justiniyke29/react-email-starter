import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Button,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NotionMagicLinkEmailProps {
  loginCode?: string;
}
const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NotionMagicLinkEmail = ({
  loginCode = "650050",
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Log in with this magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/logo.png`}
          width="110"
          height="25"
          alt="Notion's Logo"
          style={image}
        />
        <Heading style={h1}>Complete Registration</Heading>
        {/* <Text style={{ ...text, marginBottom: "14px" }}>
            Dear [User's Name],
          </Text> */}
        <Text style={{ ...text, color: "#475467" }}>
          Please enter this confirmation code in the window where you started
          creating your account:
        </Text>
        <code style={code}>{loginCode}</code>
        <Text style={{ ...text, color: "#475467" }}>
          From any device use the code to confirm email.
        </Text>
        <Text style={{ ...text, color: "#344054", fontWeight: "bold" }}>
          Or click this button to confirm your email:
        </Text>
        <Button href="https://example.com" style={button}>
          Confirm your email
        </Button>
        <Text
          style={{
            ...text,
            color: "#475467",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          If you didn't create an account in xcursions, please ignore this
          message.
        </Text>
        <div
          style={{
            backgroundColor: "#F9FAFB",
            marginTop: "56px",
            marginBottom: "24px",
            padding: "32px 4.5%",
          }}
        >
          <div
            style={{
              ...footer,
              display: "flex",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            <Link href="https://www.facebook.com/Xcursions.ng/">
              <Img
                src={`${baseUrl}/static/facebook.svg`}
                width="full"
                alt="facebook logo"
              />
            </Link>
            <Link href="https://instagram.com/xcursions.ng?igshid=YmMyMTA2M2Y=">
              <Img
                src={`${baseUrl}/static/instagram.svg`}
                width="full"
                alt="instagram logo"
              />
            </Link>
            <Link href="https://twitter.com/Xcursionsdotng?t=ya-KqSBDg45uY0Jx-FaZfw&s=09">
              <Img
                src={`${baseUrl}/static/twitter.svg`}
                width="full"
                alt="twitter logo"
              />
            </Link>
          </div>
          <Text style={footer}>
            © 2023 Xcursions. All rights reserved.
            <br /> A better company begins with a personalised employee
            experience. <br />
          </Text>
          <div
            style={{
              ...footer,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <span style={{ textDecoration: "underline" }}>Privacy</span>{" "}
            <span style={{ textDecoration: "underline" }}>Account</span>{" "}
            <span style={{ textDecoration: "underline" }}>Unsubscribe</span>
          </div>
        </div>
      </Container>
    </Body>
  </Html>
);

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: "#F5F8FF",
  maxWidth: "550px",
  margin: "0 auto",
};

const container = {
  paddingLeft: "32px",
  paddingRight: "32px",
  backgroundColor: "#FFFFFF",
  margin: "0 auto",
};

const image = {
  margin: "20px 0",
};

const h1 = {
  color: "#101828",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "12px",
  marginTop: "56px",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#101828",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#101828",
  fontSize: "9px",
  lineHeight: "22px",
  textAlign: "center" as const,
  // backgroundColor: "#F9FAFB",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#EBF5FF",
  textAlign: "center" as const,
  borderRadius: "5px",
  border: "1px solid #eee",
  fontSize: "24px",
  color: "#021A33",
};
const button = {
  color: "#ffffff",
  backgroundColor: "#0A83FF",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingRight: "36px",
  paddingLeft: "36px",
  borderRadius: "100px",
};
