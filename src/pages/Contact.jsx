import React, { useState } from 'react';
import '../styles/Contact.css';
import { sendEmailToUser, sendEmailToAdmin } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Send emails using EmailJS
    Promise.all([
      sendEmailToUser(formData), // Send confirmation email to user
      sendEmailToAdmin(formData)  // Send notification email to admin
    ])
      .then(() => {
        console.log('Emails sent successfully');
        setFormSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset the submission message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send emails:', error);
        setSubmitError('Failed to send your message. Please try again later.');
        
        // Reset the error message after 5 seconds
        setTimeout(() => {
          setSubmitError(null);
        }, 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="contact-intro">
            <p>We'd love to hear from you. Please fill out the form below or reach out to us directly.</p>
            <p>Our team will reach out to you at the earliest opportunity.</p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            
            {formSubmitted && (
              <div className="form-success-message">
                Thank you for your message! A confirmation email has been sent to your email address. We'll get back to you soon.
              </div>
            )}
            
            {submitError && (
              <div className="form-error-message">
                {submitError}
              </div>
            )}
            
            <form 
              className="contact-form" 
              onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="name">Your Name <span className="required-field">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address <span className="required-field">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject <span className="required-field">*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message <span className="required-field">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-text">
                  <h3>Head Office</h3>
                  <p>Andheri-East, Kurla Road, Mumbai, Maharashtra, 400059</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div className="contact-info-text">
                  <h3>Regional Office</h3>
                  <p>8-3-231/c/208, 2nd Floor, Sri Krishna Nagar, Yusufguda, Hyderabad, 500045</p>
                </div>
              </div>
              

              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div className="contact-info-text">
                  <h3>Email</h3>
                  <p><a href="mailto:sceliolifesciences@gmail.com">sceliolifesciences@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">🕒</div>
                <div className="contact-info-text">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM, Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;