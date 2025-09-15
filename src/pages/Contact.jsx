import React, { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: ''
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I know if my child is ready for ABA therapy?",
      answer: "ABA therapy can benefit children as early as 18 months old. If you notice developmental delays, communication challenges, or behavioral concerns, our team can conduct a comprehensive assessment to determine if ABA therapy is appropriate for your child."
    },
    {
      question: "What should I expect during the initial consultation?",
      answer: "During your initial consultation, our therapist will meet with your family to discuss your child's strengths, challenges, and goals. We'll explain our approach, answer your questions, and outline the assessment process. This typically takes 60-90 minutes."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we work with most major insurance providers and can help you understand your benefits. Our team will verify your coverage and work with you to maximize your insurance benefits for ABA therapy services."
    },
    {
      question: "How long does ABA therapy typically last?",
      answer: "The duration of ABA therapy varies for each child based on their individual needs and goals. Many children benefit from 6 months to 3 years of consistent therapy, with regular progress reviews to adjust the treatment plan as needed."
    }
  ];

  return (
    <div className="premium-contact">
      {/* Premium Contact Hero */}
      <section className="contact-hero-banner">
        <div className="contact-hero-background">
          <div className="contact-gradient-overlay"></div>
          <div className="contact-floating-elements">
            <div className="contact-float-1"></div>
            <div className="contact-float-2"></div>
            <div className="contact-float-3"></div>
          </div>
        </div>
        
        <div className="premium-container">
          <div className="contact-hero-content">
            <div className="contact-hero-text">
              <h1 className="contact-hero-headline">
                Contact Our Atlanta Team{' '}
                <span className="headline-accent">Serving Atlanta, Georgia and Surrounding Areas</span>
              </h1>
              <p className="contact-hero-subtitle">
                Ready to unlock your child's potential with in-home ABA therapy? Our Atlanta team of
                experienced professionals is here to guide you through every step of the ABA therapy process.
              </p>
              
              <div className="contact-hero-stats">
                <div className="contact-stat-item">
                  <div className="stat-icon-wrapper">
                    <CheckCircleIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">24hr</span>
                    <span className="stat-label">Response Time</span>
                  </div>
                </div>
                <div className="contact-stat-item">
                  <div className="stat-icon-wrapper">
                    <ShieldCheckIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">Expert</span>
                    <span className="stat-label">Care Team</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Form & Info */}
      <section className="premium-contact-section">
        <div className="premium-container">
          <div className="contact-main-grid">
            
            {/* Contact Form */}
            <div className="premium-contact-form-wrapper">
              <div className="contact-form-header">
                <h2 className="form-title">Get Started Today</h2>
                <p className="form-subtitle">
                  Complete this form and our team will reach out to schedule your intake call.
                </p>
              </div>
              
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="premium-form-group">
                    <label htmlFor="name" className="form-label">Full name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="premium-form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="premium-form-group">
                    <label htmlFor="email" className="form-label">Email address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="premium-form-group">
                    <label htmlFor="zip" className="form-label">Zip code *</label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="e.g., 30301"
                      required
                    />
                  </div>
                </div>
                
                <button type="submit" className="premium-btn form-submit-btn">
                  <span>Contact Our Atlanta Team</span>
                  <CalendarDaysIcon className="btn-icon" />
                  <div className="btn-ripple"></div>
                </button>
                
                <p className="form-privacy-note">
                  Your information is secure and confidential. We'll never share your details with third parties.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="premium-contact-info">
              <div className="contact-info-header">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtitle">
                  Serving Atlanta, Georgia and Surrounding Areas - Multiple ways to connect with our Atlanta team
                </p>
              </div>
              
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-card-icon primary">
                    <PhoneIcon className="card-icon" />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Call Us</h3>
                    <p className="contact-card-text">+1 (315) 239-8008</p>
                    <p className="contact-card-sub">Mon-Fri, 8AM-6PM</p>
                  </div>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-card-icon secondary">
                    <EnvelopeIcon className="card-icon" />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Email Us</h3>
                    <p className="contact-card-text">info@scoreaba.com</p>
                    <p className="contact-card-sub">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-card-icon tertiary">
                    <MapPinIcon className="card-icon" />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Service Areas</h3>
                    <p className="contact-card-text">Atlanta & Surrounding Areas</p>
                    <p className="contact-card-sub">Home-based services only</p>
                  </div>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-card-icon quaternary">
                    <ChatBubbleBottomCenterTextIcon className="card-icon" />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Live Chat</h3>
                    <p className="contact-card-text">Available on website</p>
                    <p className="contact-card-sub">Instant support</p>
                  </div>
                </div>
              </div>

                          </div>
          </div>
        </div>
      </section>

      {/* Premium FAQ Section */}
      <section className="premium-faq">
        <div className="premium-container">
          <div className="faq-header">
            <h2 className="premium-section-title center">
              Frequently Asked Questions
            </h2>
            <p className="premium-subtitle center">
              Get answers to common questions about ABA therapy and our services
            </p>
          </div>
          
          <div className="premium-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="premium-faq-item">
                <button
                  className={`faq-question ${expandedFaq === index ? 'expanded' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDownIcon className="faq-chevron" />
                </button>
                <div className={`faq-answer ${expandedFaq === index ? 'expanded' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-cta">
            <p className="faq-cta-text">
              Still have questions? We're here to help.
            </p>
            <button className="premium-btn faq-cta-btn outline">
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="contact-cta-banner">
        <div className="contact-cta-background">
          <div className="contact-cta-gradient"></div>
          <div className="contact-cta-shapes">
            <div className="contact-cta-shape-1"></div>
            <div className="contact-cta-shape-2"></div>
          </div>
        </div>
        
        <div className="premium-container">
          <div className="contact-cta-content">
            <h2 className="contact-cta-headline">
              Your Child's Success Story Starts Here
            </h2>
            <p className="contact-cta-subtext">
              Join families in Atlanta who have benefited from
              our  home-based ABA therapy programs.
            </p>
            
            
            <div className="contact-cta-trust">
              <div className="trust-item">
                <ShieldCheckIcon className="trust-icon" />
                <span>Expert Care Professionals</span>
              </div>
              <div className="trust-item">
                <StarIcon className="trust-icon" />
                <span>Quality Home-Based Care</span>
              </div>
              <div className="trust-item">
                <HeartIcon className="trust-icon" />
                <span>Compassionate,  Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
