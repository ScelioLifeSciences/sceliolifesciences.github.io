// EmailService.js
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
emailjs.init("fzJQ9DV7FpS7fHdXy"); // Replace with your actual EmailJS User ID

export const sendEmail = (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: "thapa.ujwal@gmail.com"
  };

  return emailjs.send(
    "service_ca3aya5", // Replace with your EmailJS Service ID
    "template_pglw3jd", // Replace with your EmailJS Template ID
    templateParams
  );
};