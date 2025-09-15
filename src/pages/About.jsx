import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  BeakerIcon,
  UsersIcon,
  StarIcon,
  ChartBarIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const About = () => {
  return (
    <div className="premium-about">
      {/* Premium Hero Banner */}
      <section className="about-hero-banner">
        <div className="hero-banner-background">
          <div className="hero-gradient-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="premium-container">
          <div className="hero-banner-content">
            <div className="hero-banner-text">
              <h1 className="hero-banner-headline">About Score ABA Atlanta</h1>
              <p className="hero-banner-subtitle">
                Atlanta's premier provider of <strong>in-home ABA therapy</strong> services. We deliver excellence in
                Applied Behavior Analysis through compassionate home-based care, scientific rigor, and unwavering
                commitment to every child's potential throughout <strong>Atlanta, Georgia</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Mission Section */}
      <section className="premium-mission">
        <div className="premium-container">
          <div className="mission-content">
            <div className="mission-text-block">
              <h2 className="premium-section-title center">
                Our Mission & Vision
              </h2>
              <div className="mission-grid">
                <div className="mission-card glassmorphism-card">
                  <div className="mission-icon-container">
                    <HeartIcon className="mission-icon" />
                  </div>
                  <h3 className="mission-card-title">Our Mission</h3>
                  <p className="mission-card-text">
                    To empower children with autism and developmental differences throughout Atlanta to achieve their
                    highest potential through compassionate, individualized <strong>in-home ABA therapy</strong>
                    that respects their unique strengths and challenges.
                  </p>
                </div>
                
                <div className="mission-card glassmorphism-card">
                  <div className="mission-icon-container">
                    <StarIcon className="mission-icon" />
                  </div>
                  <h3 className="mission-card-title">Our Vision</h3>
                  <p className="mission-card-text">
                    A world where every child with autism in Georgia has access to quality, 
                    <strong>home-based autism services</strong> that celebrate their individuality while providing the support they need
                    to thrive in their Atlanta communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="about-cta-banner">
        <div className="cta-banner-background">
          <div className="cta-gradient-overlay"></div>
          <div className="cta-floating-shapes">
            <div className="cta-shape-1"></div>
            <div className="cta-shape-2"></div>
          </div>
        </div>
        
        <div className="premium-container">
          <div className="about-cta-content">
            <h2 className="about-cta-headline">
              Our mission is your child's success. Start your journey today.
            </h2>
            <p className="about-cta-subtext">
              Experience the difference that expert, compassionate care can make in your family's life.
            </p>
            <Link to="/contact">
              <button className="premium-btn cta-primary">
                <span>Begin Your Journey</span>
                <div className="btn-glow-effect"></div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
