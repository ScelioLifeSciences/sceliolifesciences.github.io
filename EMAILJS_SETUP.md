# Setting Up EmailJS for Contact Form

This guide will help you set up EmailJS to send emails directly from your contact form to both the user who submitted the form and to your admin email.

## 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free plan allows 200 emails per month, which should be sufficient for most small websites

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down the Service ID (you'll need it later)

## 3. Create Email Templates

You'll need to create two email templates:

### Template 1: User Confirmation Email

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it something like "User Confirmation"
4. Design your template with the following variables:
   - `{{to_name}}` - The name of the person who submitted the form
   - `{{to_email}}` - The email of the person who submitted the form
   - `{{subject}}` - The subject they entered
   - `{{message}}` - The message they sent
   - `{{reply_to}}` - Your admin email (sceliolifesciences@gmail.com)
5. Example template:
   ```
   Hello {{to_name}},

   Thank you for contacting Scelio Lifesciences. We have received your message with the following details:

   Subject: {{subject}}
   Message: {{message}}

   We will get back to you as soon as possible.

   Best regards,
   Scelio Lifesciences Team
   ```
6. Note down the Template ID (you'll need it later)

### Template 2: Admin Notification Email

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it something like "Admin Notification"
4. Design your template with the following variables:
   - `{{from_name}}` - The name of the person who submitted the form
   - `{{from_email}}` - The email of the person who submitted the form
   - `{{subject}}` - The subject they entered
   - `{{message}}` - The message they sent
   - `{{to_email}}` - Your admin email (sceliolifesciences@gmail.com)
5. Example template:
   ```
   New Contact Form Submission

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   Message: {{message}}
   ```
6. Note down the Template ID (you'll need it later)

## 4. Get Your User ID

1. Go to "Integration" in your EmailJS dashboard
2. Look for your User ID
3. Note it down (you'll need it for the next step)

## 5. Update the emailService.js File

Open the file at `celio/src/services/emailService.js` and update the following:

```javascript
// Initialize EmailJS with your User ID
emailjs.init("YOUR_USER_ID"); // Replace with your actual User ID from the Integration page

/**
 * Sends an email to the user who submitted the form
 */
export const sendEmailToUser = (formData) => {
  const templateParams = {
    to_name: formData.name,
    to_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    reply_to: "sceliolifesciences@gmail.com"
  };

  return emailjs.send(
    "YOUR_SERVICE_ID", // Replace with your Service ID
    "YOUR_USER_TEMPLATE_ID", // Replace with your User Template ID
    templateParams
  );
};

/**
 * Sends a notification email to the admin
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
    "YOUR_SERVICE_ID", // Replace with your Service ID
    "YOUR_ADMIN_TEMPLATE_ID", // Replace with your Admin Template ID
    templateParams
  );
};
```

Replace:
- `YOUR_USER_ID` with your EmailJS User ID
- `YOUR_SERVICE_ID` with your EmailJS Service ID
- `YOUR_USER_TEMPLATE_ID` with your User Confirmation Template ID
- `YOUR_ADMIN_TEMPLATE_ID` with your Admin Notification Template ID

## 6. Install Dependencies

Run the following command in your project directory:

```
npm install
```

## 7. Test the Form

After completing the setup, test the form by filling it out and submitting it. You should:
1. Receive an admin notification email at sceliolifesciences@gmail.com
2. The user should receive a confirmation email at the email address they entered

## Need Help?

If you need assistance, refer to the [EmailJS documentation](https://www.emailjs.com/docs/) or contact the developer.