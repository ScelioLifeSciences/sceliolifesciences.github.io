import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Committed to improving lives through innovative pharmaceutical solutions designed to enhance health and well-being.
          </p>
        </div>
      </div>
      
      <div className="container">
        <div className="about-columns">
          <section className="about-section full-width">
            <h2>Our Story</h2>
            <div className="section-content">
              <p>
                Founded in 2005, Scelio Lifesciences has grown from a small research lab to a leading pharmaceutical company. 
                Our journey began with a simple mission: to develop effective medications that improve quality of life 
                for patients worldwide.
              </p>
              <p>
                Over the years, we have expanded our product range to include treatments for various conditions, 
                from common ailments to specialized therapies. Our commitment to quality, innovation, and patient 
                well-being has remained at the core of everything we do.
              </p>
            </div>
          </section>
          
          <section className="about-section full-width">
            <h2>Our Mission</h2>
            <div className="section-content">
              <p>
                At Scelio Lifesciences, our mission is to enhance global health through innovative pharmaceutical solutions 
                that are accessible, effective, and safe. We strive to:
              </p>
              <ul>
                <li>Develop high-quality medications that address unmet medical needs</li>
                <li>Ensure our products are accessible to those who need them</li>
                <li>Maintain the highest standards of safety and efficacy</li>
                <li>Contribute to advancements in medical science through continuous research</li>
                <li>Operate with integrity and transparency in all aspects of our business</li>
              </ul>
            </div>
          </section>
          
          <section className="about-section values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We continuously seek new ways to improve our products and processes, embracing cutting-edge research and technology.</p>
              </div>
              
              <div className="value-card">
                <h3>Quality</h3>
                <p>We maintain rigorous standards throughout our operations, from research and development to manufacturing and distribution.</p>
              </div>
              
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We conduct our business ethically and transparently, building trust with patients, healthcare providers, and partners.</p>
              </div>
              
              <div className="value-card">
                <h3>Accessibility</h3>
                <p>We strive to make our medications available to all who need them, regardless of geographic or economic barriers.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div className="container">
        <section className="about-section full-width">
          <h2>Our Team</h2>
          <div className="section-content">
            <p>
              Our success is driven by our dedicated team of scientists, researchers, healthcare professionals, and support staff. 
              With diverse backgrounds and expertise, our team members share a common goal: to improve health outcomes for patients worldwide.
            </p>
            <p>
              Led by experienced industry professionals, our team combines scientific knowledge with business acumen to develop 
              and deliver pharmaceutical solutions that make a difference.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;