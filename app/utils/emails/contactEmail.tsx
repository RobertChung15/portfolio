import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string,
  email: string,
  subject: string,
  message: string
}

const ContactEmail = ({ name, email, subject, message }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>{subject}</Preview>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}></Section>
            <Section style={upperSection}>
              <Heading style={h1}>New Contact</Heading>
              <Section style={verificationSection}>
                <Text style={mainText}>
                  Name: {name}
                </Text>
                <Text style={mainText}>
                  Email: {email}
                </Text>
                <Text style={mainText}>
                  {message}
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#fff',
  color: '#212121',
};

const container = {
  padding: '20px',
  margin: '0 auto',
  backgroundColor: '#eee',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '10px 0',
};

const imageSection = {
  backgroundColor: '#252f3d',
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const coverSection = { backgroundColor: '#fff' };

const upperSection = { padding: '25px 35px' };

const verificationSection = {
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
};

const mainText = { ...text, marginBottom: '14px' };


ContactEmail.PreviewProps = {
  name: "Contact",
  email: "contact@email.com",
  subject: "This is the subject",
  message: "This is a long message"
};

export default ContactEmail;
