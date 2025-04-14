# Setting Up EmailJS for Contact Form

To make the contact form send emails directly to your inbox, you need to set up EmailJS. Follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for most small websites

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your template with the following variables:
   - `{{from_name}}` - The name of the person submitting the form
   - `{{from_email}}` - The email of the person submitting the form
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The message content
   - `{{to_email}}` - The recipient email (sceliolifesciences@gmail.com)

## 4. Update the EmailService.js File

Open the file at `celio/src/components/EmailService.js` and update the following:

```javascript
// Initialize EmailJS with your User ID
emailjs.init("YOUR_USER_ID"); // Replace with your actual User ID from the Integration page

export const sendEmail = (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: "sceliolifesciences@gmail.com"
  };

  return emailjs.send(
    "YOUR_SERVICE_ID", // Replace with your Service ID
    "YOUR_TEMPLATE_ID", // Replace with your Template ID
    templateParams
  );
};
```

## 5. Install Dependencies

Run the following command in your project directory:

```
npm install
```

## 6. Test the Form

After completing the setup, test the form by filling it out and submitting it. You should receive an email at sceliolifesciences@gmail.com with the form details.

## Need Help?

If you need assistance, refer to the [EmailJS documentation](https://www.emailjs.com/docs/) or contact the developer.