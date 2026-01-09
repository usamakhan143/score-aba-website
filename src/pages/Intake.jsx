import React, { useState } from 'react';
import { CheckCircleIcon, CalendarDaysIcon, ShieldCheckIcon, HeartIcon } from '@heroicons/react/24/outline';

const Intake = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cityOrZip: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/intake`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your intake form has been submitted successfully. Our team will contact you within 24 hours to get started.'
        });
        setFormData({ name: '', email: '', phone: '', cityOrZip: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to submit intake form. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="premium-contact">
      {/* Hero */}
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
                Start Services {' '}
                <span className="headline-accent">Short Intake Form</span>
              </h1>
              <p className="contact-hero-subtitle">
                Answer a few questions so we can match you with the right care team.
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
                <div className="contact-stat-item">
                  <div className="stat-icon-wrapper">
                    <HeartIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">Family</span>
                    <span className="stat-label">Centered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="premium-contact-section">
        <div className="premium-container">
          <div className="intake-center-wrap">
            <div className="premium-contact-form-wrapper">
              <div className="contact-form-header">
                <h2 className="form-title">Tell Us About Your Family</h2>
                <p className="form-subtitle">This takes about 2 minutes.</p>
              </div>

              <form className="premium-contact-form" onSubmit={handleSubmit}>
                {submitStatus && (
                  <div className={`form-status ${submitStatus.type}`} style={{
                    padding: '15px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                    border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                  }}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="form-row">
                  <div className="premium-form-group">
                    <label htmlFor="name" className="form-label">Full name *</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="Full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="premium-form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="(555) 123-4567"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="premium-form-group">
                    <label htmlFor="email" className="form-label">Email address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="you@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="premium-form-group">
                    <label htmlFor="cityOrZip" className="form-label">Zip code *</label>
                    <input
                      id="cityOrZip"
                      name="cityOrZip"
                      value={formData.cityOrZip}
                      onChange={handleChange}
                      className="premium-form-input"
                      placeholder="e.g., 30301"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="premium-btn form-submit-btn"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Intake'}</span>
                  <CalendarDaysIcon className="btn-icon" />
                  <div className="btn-ripple"></div>
                </button>
                <p className="form-privacy-note">Your information is secure and confidential.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intake;
