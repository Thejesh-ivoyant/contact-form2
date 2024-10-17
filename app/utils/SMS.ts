import twilio from "twilio";
import pRetry from "p-retry";

export const SMS = async (c_code: string, phone_no: string, name: string) => {
  // If posting to HubSpot is successful, send SMS
  const accountSid = `${process.env.SMS_SID}`;
  const authToken = `${process.env.SMS_TOKEN_KEY}`;
  const client = twilio(accountSid, authToken);

  const sendSMS = async (to: string, from: string, body: string) => {
    try {
      const message = await client.messages.create({
        body,
        from,
        to,
      });

      console.log('SMS sent successfully:', message.sid);
      return true;
    } catch (error) {
      console.error('Error sending SMS:', error);
      throw error;  // Ensure error is thrown for retry mechanism
    }
  };

  const to = `${c_code}${phone_no}`;
  const from = '+14049946986';
  const smsBody = `${name}, it was great meeting with you at DIR Connect Technology Expo 2024 in Austin, TX. We're excited to connect and partner with you. You can reach me directly at:\n\nSonya Beredimas\nsonya@ivoyant.com \n+1 (678) 674 3937\nhttps://bit.ly/linkedin-sonya-beredimas\nhttps://www.ivoyant.com`;
console.warn("number is ",`${c_code}${phone_no}`);
  try {
    await pRetry(() => sendSMS(to, from, smsBody), {
      retries: 3, // Number of retries
      onFailedAttempt: error => {
        console.log(`Attempt ${error.attemptNumber} failed. There are ${error.retriesLeft} retries left.`);
      },
    });
  } catch (error) {
    console.error('Failed to send SMS after multiple attempts:', error);
  }
};
