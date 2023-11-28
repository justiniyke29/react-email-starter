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
    <Body style={main}>
      <Container style={container}>
        <div
          style={{
            backgroundColor: "#101828",
            borderRadius: "9px",
            minWidth: "300px",
            color: "#fff",
            padding: "20px",
            position: "relative",
          }}
        >
          <Img
            src={`${baseUrl}/static/logo1.svg`}
            width="full"
            alt="Xcursions Logo"
          />
          <Heading style={{ fontSize: "24px", fontWeight: "700" }}>
            Travel Payment is Due
          </Heading>
          <Text style={{ ...text, marginBottom: "14px" }}>
            Dear [User's Name],
          </Text>
          <Text style={{ ...text, paddingBottom: "30px" }}>
            We hope this email finds you well and excited about your upcoming
            travel plans with Save & Travel. We would like to remind you that
            the payment for your trip is due soon.
          </Text>
        </div>
        <div
          style={{
            backgroundColor: "#FFF",
            padding: "32px 4.5%",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Text style={{ color: "#344054", fontWeight: "bold" }}>
            Trip Details
          </Text>
          <Text style={{ ...text, color: "#475467" }}>
            Destination: <span style={{ fontWeight: "bold" }}>Dubai</span>
          </Text>
          <Text style={{ ...text, color: "#475467" }}>
            Departure Date:{" "}
            <span style={{ fontWeight: "bold" }}>20th May 2024</span>
          </Text>
          <Text style={{ ...text, color: "#475467" }}>
            Trip Duration: <span style={{ fontWeight: "bold" }}>2weeks</span>
          </Text>
          <div
            style={{
              backgroundColor: "#F9FAFB",
              display: "flex",
              justifyContent: "space-evenly",
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
              borderRadius: "9px",
            }}
          >
            <div>
              <p style={{ color: "#667084", fontSize: "12px" }}>amount due</p>
              <p
                style={{
                  color: "#0A83FF",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                ₦20,000{" "}
              </p>
            </div>
            <div>
              <p style={{ color: "#667084", fontSize: "12px" }}>Due Date</p>
              <p
                style={{
                  color: "#101828",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                5th May , 2023
              </p>
            </div>
          </div>
        </div>
        <Text style={{ ...text, color: "#475467" }}>
          To ensure a smooth and uninterrupted travel experience, we kindly
          request that you complete the payment by the specified due date. Here
          are the payment options available to you:
        </Text>
        <Text style={{ ...text, color: "#344054", fontWeight: "bold" }}>
          Click on this button to Pay Online
        </Text>
        <Button href="https://example.com" style={button}>
          Pay now
        </Button>
        <Text style={{ ...text, color: "#344054", fontWeight: "bold" }}>
          Or Pay Via Transfer
        </Text>
        <div
          style={{
            backgroundColor: "#F9FAFB",
            padding: "12px 4.5%",
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            borderRadius: "9px",
          }}
        >
          <Text style={{ ...text, color: "#475467" }}>
            Bank Name: <span style={{ fontWeight: "bold" }}>[Bank Name]</span>
          </Text>
          <Text style={{ ...text, color: "#475467" }}>
            Account Holder:{" "}
            <span style={{ fontWeight: "bold" }}>[Account Holder]</span>
          </Text>
          <Text style={{ ...text, color: "#475467" }}>
            Account Number:{" "}
            <span style={{ fontWeight: "bold" }}>[Account Number]</span>
          </Text>
          <Text style={{ ...text, color: "#475467" }}>
            Reference:{" "}
            <span style={{ fontWeight: "bold" }}>[Payment Reference]</span>
          </Text>
        </div>
        <Text
          style={{
            ...text,
            color: "#475467",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          Once the payment has been made, kindly send us a confirmation of the
          transaction at [Payment Confirmation Email]. This will help us ensure
          that your reservation is successfully updated.
        </Text>
        <Text
          style={{
            ...text,
            color: "#475467",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          If you have any questions or need further assistance, please don't
          hesitate to reach out to our support team at{" "}
          <Link
            href="https://help@xcursions.ng"
            target="_blank"
            style={{
              ...link,
              marginBottom: "16px",
            }}
          >
            help@xcusrions.ng /+2348093839940
          </Link>{" "}
          We're here to help!
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
  color: "#fff",
  fontSize: "14px",
  // margin: "24px 0",
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
