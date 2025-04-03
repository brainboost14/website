import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  emailjs.init('YNuKAB4GUvzqECQI6');
};

// Send an email via EmailJS
export const sendEmail = async (
  templateId: string, 
  serviceId: string, 
  templateParams: Record<string, unknown>
) => {
  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );
    return { success: true, result };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};