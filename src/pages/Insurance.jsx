import React from 'react';
import { BuildingOffice2Icon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Insurance = () => {
  const insurers = [
    { name: 'Aetna' },
    { name: 'Cigna' },
    { name: 'UnitedHealthcare' },
    { name: 'Blue Cross Blue Shield' }
  ];

  return (
    <div className="premium-services">
      {/* Hero */}
      <section className="services-hero-banner">
        <div className="services-hero-background">
          <div className="services-gradient-overlay"></div>
          <div className="services-floating-shapes">
            <div className="services-shape-1"></div>
            <div className="services-shape-2"></div>
            <div className="services-shape-3"></div>
          </div>
        </div>
        <div className="premium-container">
          <div className="services-hero-content">
            <div className="services-hero-text">
              <h1 className="services-hero-headline">
                Insurance We Accept {' '}
                <span className="headline-accent"> Accessible Care</span>
              </h1>
              <p className="services-hero-subtitle">
                We work with major insurance providers to help families access high-quality, home-based ABA therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurers Grid */}
      <section className="premium-service-offerings">
        <div className="premium-container">
          <div className="service-offerings-header">
            <h2 className="premium-section-title center">Current Insurance Partners</h2>
            <p className="premium-subtitle center">Coverage varies by plan. We'll help you verify benefits.</p>
          </div>

          <div className="premium-services-grid">
            {insurers.map((i) => (
              <div key={i.name} className="premium-service-card">
                <div className="service-card-header">
                  <div className="service-icon-container secondary">
                    <BuildingOffice2Icon className="service-icon" />
                  </div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{i.name}</h3>
                  <p className="service-card-description">
                    We'll check your specific plan for ABA therapy coverage and out-of-pocket costs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta-banner">
        <div className="services-cta-background">
          <div className="services-cta-gradient"></div>
          <div className="services-cta-shapes">
            <div className="services-cta-shape-1"></div>
            <div className="services-cta-shape-2"></div>
          </div>
        </div>
        <div className="premium-container">
          <div className="services-cta-content">
            <h2 className="services-cta-headline">Want us to verify your benefits?</h2>
            <p className="services-cta-subtext">Submit the intake form and our team will check your coverage and next steps.</p>
            <div className="services-cta-actions">
              <Link to="/intake">
                <button className="premium-btn cta-primary large">
                  <span>Verify Benefits</span>
                  <div className="btn-glow-effect"></div>
                </button>
              </Link>
              <Link to="/contact">
                <button className="premium-btn cta-secondary-outline large">
                  <span>Contact Our Team</span>
                  <ArrowRightIcon className="btn-arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
