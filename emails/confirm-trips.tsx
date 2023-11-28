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
        <div
          style={{
            backgroundColor: "#12B76A",
            borderRadius: "9px",
            minWidth: "300px",
            color: "#fff",
            marginTop: "20px",
          }}
        >
          <Img
            src={`${baseUrl}/static/email3.png`}
            width="full"
            alt="Notion's Logo"
            style={image}
          />
          <Heading style={{ fontSize: "24px", textAlign: "center" }}>
            Your Trip to Dubai Awaits
          </Heading>
          <Text style={{ ...text, marginBottom: "14px" }}>
            Dear [User's Name],
          </Text>
          <Text style={{ ...text, paddingBottom: "30px" }}>
            Congratulations! We are thrilled to confirm that your trip booking
            with Save & Travel has been successfully processed. Get ready for an
            incredible adventure filled with unforgettable experiences.
          </Text>
        </div>
        <div
          style={{
            backgroundColor: "#F9FAFB",
            marginTop: "56px",
            marginBottom: "24px",
            padding: "32px 4.5%",
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
            Return Date:{" "}
            <span style={{ fontWeight: "bold" }}>1st June, 2024</span>
          </Text>
          <Text style={{ ...text, color: "#475467" }}>
            Trip Duration: <span style={{ fontWeight: "bold" }}>2weeks</span>
          </Text>
        </div>
        <Text style={{ ...text, color: "#475467" }}>
          We have carefully curated this trip to ensure you have an exceptional
          travel experience. Whether you're seeking relaxation, exploration, or
          cultural immersion, we've got you covered.
        </Text>
        <Text style={{ color: "#344054", fontWeight: "bold" }}>
          Important Information:
        </Text>
        <Section>
          <Row>
            <Column style={column}>
              ⛰️ Flight Details: Please find attached your flight itinerary.
              Review the departure and arrival times carefully and ensure you
              arrive at the airport well in advance.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              🏝️ Accommodation: You will be staying at [Accommodation Name]
              during your trip. Rest assured, we have chosen a comfortable and
              convenient place for you to unwind and recharge.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              ✈️ Activities and Excursions: Prepare yourself for exciting
              adventures! We have planned a series of thrilling activities and
              must-visit attractions to make your trip truly memorable. A
              detailed itinerary is attached for your reference.
            </Column>
          </Row>
          <Row>
            <Column style={column}>
              💸 Travel Documents: Please make sure to carry all necessary
              travel documents, including your passport, identification, and any
              required visas or permits. Check the attached document for a
              checklist of essential items.
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
  margin: "0 auto",
  paddingTop: "20px",
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
  color: "#fff",
  fontSize: "14px",
  margin: "15px",
};

const footer = {
  color: "#101828",
  fontSize: "9px",
  lineHeight: "22px",
  textAlign: "center" as const,
  // backgroundColor: "#F9FAFB",
};
