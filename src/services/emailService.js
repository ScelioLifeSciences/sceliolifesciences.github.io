import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
emailjs.init("fzJQ9DV7FpS7fHdXy"); // Replace with your actual EmailJS User ID

/**
 * Sends an email to the user who submitted the form
 * @param {Object} formData - The form data containing name, email, subject, message
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendEmailToUser = (formData) => {
  const templateParams = {
    to_name: formData.name,
    to_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    reply_to: formData.email  // Set reply-to to the user's email
  };

  return emailjs.send(
    "service_ca3aya5", // Replace with your EmailJS Service ID
    "template_pglw3jd", // Replace with your EmailJS Template ID for user emails
    templateParams
  );
};

/**
 * Sends a notification email to the admin
 * @param {Object} formData - The form data containing name, email, subject, message
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendEmailToAdmin = (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: "sceliolifesciences@gmail.com"
  };

  return emailjs.send(
    "service_ca3aya5", // Replace with your EmailJS Service ID
    "template_i0i8588", // Replace with your EmailJS Template ID for admin notifications
    templateParams
  );
};