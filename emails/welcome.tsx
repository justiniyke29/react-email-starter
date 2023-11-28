import {
  Body,
  Container,
  Head,
  Heading,
  Section,
  Row,
  Column,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NotionMagicLinkEmail = () => (
  <Html>
    <Head />
    <Preview>Log in with this magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/logo.png`}
          width="110"
          height="25"
          alt="Xcursions Logo"
          style={image}
        />
        <Heading style={h1}>Welcome to Xcursion !!!</Heading>
        <Text style={{ ...text, marginBottom: "14px" }}>
          Dear [User's Name],
        </Text>
        <Text style={{ ...text, color: "#475467" }}>
          Welcome to Xcursion! We are thrilled to have you join our travel
          community and embark on a journey of discovery and adventure. Get
          ready to unlock extraordinary destinations and create lifelong
          memories.
        </Text>
        <Img
          src={`${baseUrl}/static/email1.png`}
          width="full"
          alt="Notion's Logo"
          style={image}
        />
        <Text style={{ ...text, color: "#344054", fontWeight: "bold" }}>
          Here's what you can expect as a valued member of the Xcursion family:
        </Text>
        <Section>
          <Row>
            <Column style={column}>
              ⛰️ Discover Extraordinary Destinations: Explore captivating
              destinations, from exotic paradises to hidden gems, satisfying
              your wanderlust.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              🏝️ Tailored Experiences: Personalized itineraries crafted by our
              experts, matching your preferences and desired level of adventure.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              ️ Seamless Booking: Easy-to-use website and app for effortless
              booking, with convenient payment options and instant
              confirmations.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              💸 Exclusive Travel Offers: Access exclusive promotions,
              discounts, and offers, maximizing your travel experiences while
              staying within your budget.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              ⏰ 24/7 Support: Exceptional customer support available round the
              clock, assisting you at every stage of your journey.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              ✨ Inspiring Travel Content: Stay inspired through our blog,
              newsletters, and social media, with the latest trends, tips, and
              captivating stories.
            </Column>
          </Row>
        </Section>
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
const column = {
  color: "#475467",
  fontSize: "14px",
  paddingBottom: "10px",
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
