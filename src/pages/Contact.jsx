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
    childAge: '',
    serviceType: '',
    urgency: '',
    message: ''
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
      answer: "During your initial consultation, our BCBA will meet with your family to discuss your child's strengths, challenges, and goals. We'll explain our approach, answer your questions, and outline the assessment process. This typically takes 60-90 minutes."
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
                Start Your Child's Journey
                <span className="headline-accent">Take the First Step Today</span>
              </h1>
              <p className="contact-hero-subtitle">
                Ready to unlock your child's potential? Our team of dedicated professionals 
                is here to guide you through every step of the ABA therapy process.
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
                    <CalendarDaysIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">Free</span>
                    <span className="stat-label">Consultation</span>
                  </div>
                </div>
                <div className="contact-stat-item">
                  <div className="stat-icon-wrapper">
                    <ShieldCheckIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">BCBA</span>
                    <span className="stat-label">Certified Team</span>
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
                  Complete this form and our team will reach out within 24 hours to schedule your free consultation.
                </p>
              </div>
              
              <form className="premium-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="premium-form-group">
                    <label htmlFor="name" className="form-label">Parent/Guardian Name *</label>
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
                    <label htmlFor="email" className="form-label">Email Address *</label>
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
                </div>
                
                <div className="form-row">
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
                  
                  <div className="premium-form-group">
                    <label htmlFor="childAge" className="form-label">Child's Age</label>
                    <select
                      id="childAge"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="premium-form-select"
                    >
                      <option value="">Select age range</option>
                      <option value="18months-3years">18 months - 3 years</option>
                      <option value="3-6years">3 - 6 years</option>
                      <option value="6-12years">6 - 12 years</option>
                      <option value="12-18years">12 - 18 years</option>
                      <option value="18plus">18+ years</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="premium-form-group">
                    <label htmlFor="serviceType" className="form-label">Service Interest</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="premium-form-select"
                    >
                      <option value="">Select service type</option>
                      <option value="in-home">In-Home ABA Therapy</option>
                      <option value="clinic">Clinic-Based Programs</option>
                      <option value="school">School Support Services</option>
                      <option value="parent-training">Parent & Family Training</option>
                      <option value="assessment">Assessment Only</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div className="premium-form-group">
                    <label htmlFor="urgency" className="form-label">Timeline</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="premium-form-select"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2weeks">Within 1-2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="just-exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>
                
                <div className="premium-form-group">
                  <label htmlFor="message" className="form-label">Tell Us About Your Child *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="premium-form-textarea"
                    placeholder="Please share any specific concerns, goals, or questions you have. This helps us prepare for our conversation with you."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="premium-btn form-submit-btn">
                  <span>Schedule Free Consultation</span>
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
                  Multiple ways to connect with our team
                </p>
              </div>
              
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-card-icon primary">
                    <PhoneIcon className="card-icon" />
                  </div>
                  <div className="contact-card-content">
                    <h3 className="contact-card-title">Call Us</h3>
                    <p className="contact-card-text">(512) 555-0123</p>
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
                    <p className="contact-card-text">Austin & Surrounding Areas</p>
                    <p className="contact-card-sub">In-home and clinic services</p>
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

              <div className="emergency-contact">
                <div className="emergency-header">
                  <ClockIcon className="emergency-icon" />
                  <h3 className="emergency-title">Crisis Support</h3>
                </div>
                <p className="emergency-text">
                  For behavioral emergencies outside business hours, contact our 24/7 crisis line at 
                  <strong> (512) 555-HELP</strong>
                </p>
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
              Join hundreds of families who have transformed their children's lives through 
              our evidence-based ABA therapy programs.
            </p>
            
            
            <div className="contact-cta-trust">
              <div className="trust-item">
                <ShieldCheckIcon className="trust-icon" />
                <span>BCBA Certified Professionals</span>
              </div>
              <div className="trust-item">
                <StarIcon className="trust-icon" />
                <span>95% Family Satisfaction Rate</span>
              </div>
              <div className="trust-item">
                <HeartIcon className="trust-icon" />
                <span>Compassionate, Family-Centered Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
