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
            <h2>Our Story: From a Seed of an Idea to a Vision Realized</h2>
            <div className="section-content">
              <p>
                The seeds of Scelio Lifesciences were sown in the fertile ground of a visionary mind back in 2009. It wasn't just a fleeting thought, but a persistent spark, fueled by a deep-seated desire to contribute meaningfully to healthcare. Years were dedicated to immerse ourselves in the intricate world of pharmaceuticals, absorbing invaluable experience and insights. This period of dedicated learning and growth laid the strong foundation upon which our company would eventually be built.
              </p>
              <p>
                Finally, in 2023, that long-held vision took tangible form with the inception of Scelio Lifesciences. Our journey commenced with a clear and unwavering mission: to craft effective medications that genuinely elevate the quality of life for patients across the globe. This wasn't just about developing drugs; it was about creating solutions that bring hope and healing.
              </p>
              <p>
                From that initial spark to our present endeavors, a steadfast commitment to quality, a relentless pursuit of innovation, and an unwavering focus on patient well-being have been the guiding stars of our journey. These principles are not just words on paper; they are the very essence of who we are and what we strive to achieve every single day.
              </p>
            </div>
          </section>
          
          <section className="about-section full-width">
            <h2>Our Mission: Empowering Global Health Through Innovation</h2>
            <div className="section-content">
              <p>
                At Scelio Lifesciences, our mission is to be a catalyst for enhanced global health. We are driven by a passion to develop groundbreaking pharmaceutical solutions that are not only effective and safe but also accessible to those who need them most. Our core objectives are:
              </p>
              <ul>
                <li><strong>Pioneering Solutions for Unmet Needs:</strong> To diligently research and develop high-quality medications that address critical gaps in healthcare and offer new hope for challenging medical conditions.</li>
                <li><strong>Bridging the Access Gap:</strong> To actively work towards ensuring our products are within reach of patients worldwide, breaking down geographical and economic barriers to essential medicines.</li>
                <li><strong>Upholding Uncompromising Standards:</strong> To adhere to the most stringent standards of safety and efficacy in every stage of our product lifecycle, from discovery to patient delivery.</li>
                <li><strong>Operating with Integrity and Transparency:</strong> To conduct all aspects of our business with the utmost ethical principles and open communication, fostering trust with patients, healthcare professionals, and our valued partners.</li>
              </ul>
            </div>
          </section>
          
          <section className="about-section values-section">
            <h2>Our Values: The Cornerstones of Our Commitment</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation: The Engine of Progress</h3>
                <p>We foster a culture of continuous improvement and exploration, relentlessly seeking novel approaches and embracing cutting-edge research and technology to advance pharmaceutical science.</p>
              </div>
              
              <div className="value-card">
                <h3>Quality: Our Unwavering Standard</h3>
                <p>We are committed to excel in every facet of our operations. From meticulous research and development to precise manufacturing and responsible distribution, quality is non-negotiable.</p>
              </div>
              
              <div className="value-card">
                <h3>Integrity: The Foundation of Trust</h3>
                <p>We conduct our business with unwavering ethical principles and transparency. We believe in building lasting relationships based on honesty, trust, and mutual respect with patients, healthcare providers, and our partners.</p>
              </div>
              
              <div className="value-card">
                <h3>Accessibility: Healthcare Without Boundaries</h3>
                <p>We are driven by a deep commitment to make our medications available to all who need them, striving to overcome geographic and economic obstacles to ensure equitable access to essential healthcare solutions.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div className="container">
        <section className="about-section full-width">
          <h2>Our Team: The Heart and Soul of Scelio Lifesciences</h2>
          <div className="section-content">
            <p>
              The driving force behind Scelio Lifesciences' success is our dedicated and passionate team, supported by the invaluable insights of healthcare professionals and our committed support team. Hailing from diverse backgrounds and bringing a wealth of specialized expertise, each member shares a unified purpose: to make a tangible difference in the health outcomes of patients worldwide.
            </p>
            <p>
              Under the guidance of seasoned industry leaders, our team seamlessly blends rigorous scientific knowledge with sharp business acumen. This powerful synergy enables us to develop and deliver innovative pharmaceutical solutions that are not just treatments, but pathways to a healthier future for individuals across the globe. We are united by a shared vision and a collective commitment to making a meaningful impact on global health.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;