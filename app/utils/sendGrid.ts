import axios, { AxiosResponse } from 'axios';

interface EmailProps {
  name: string;
}

interface EmailData {
  fromMail: string;
  fromName: string;
  to: string[];
  subject: string;
  templateId: string;
  props: EmailProps;
}

export async function SendGrid(email: string, fullName: string) {
    const emailData: EmailData = {
    fromMail: "Sonya@ivoyant.com",
    fromName: "Sonya Beredimas",
    to: [email],
    subject: "Great connecting with you at NMSDC Annual Meetup",
    templateId: "d-07435702649e45039b78d80673c0f5ac",
    props: {
      name: fullName
    }
  };

  try {
    const response: AxiosResponse = await axios.post(
      'https://communication-service-ivoyant.azurewebsites.net/ivoyant/products/notifier/email',
      emailData,
      {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
