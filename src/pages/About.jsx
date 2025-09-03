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
                    A world where every child with autism in Georgia has access to quality, family-centered
                    <strong>home-based autism services</strong> that celebrate their individuality while providing the support they need
                    to thrive in their Atlanta communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Timeline Section */}
      <section className="premium-timeline">
        <div className="premium-container">
          <div className="timeline-header">
            <h2 className="premium-section-title center">Our Journey</h2>
            <p className="premium-subtitle center">
              From humble beginnings to becoming a trusted provider of home-based ABA therapy in Atlanta
            </p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <LightBulbIcon className="timeline-icon" />
              </div>
              <div className="timeline-content glassmorphism-card">
                <div className="timeline-year">2018</div>
                <h3 className="timeline-title">Foundation</h3>
                <p className="timeline-description">
                  Score ABA was founded by a team of passionate autism advocates
                  who recognized the need for more personalized, family-centered ABA services.
                </p>
              </div>
            </div>
            
            <div className="timeline-item reverse">
              <div className="timeline-marker">
                <UsersIcon className="timeline-icon" />
              </div>
              <div className="timeline-content glassmorphism-card">
                <div className="timeline-year">2019</div>
                <h3 className="timeline-title">Team Growth</h3>
                <p className="timeline-description">
                  Expanded our team to include specialized therapists, parent training 
                  specialists, and support staff to serve more families across the region.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker">
                <BeakerIcon className="timeline-icon" />
              </div>
              <div className="timeline-content glassmorphism-card">
                <div className="timeline-year">2020</div>
                <h3 className="timeline-title">Innovation</h3>
                <p className="timeline-description">
                  Developed cutting-edge therapy protocols and integrated technology 
                  solutions to enhance treatment outcomes and family engagement.
                </p>
              </div>
            </div>
            
            <div className="timeline-item reverse">
              <div className="timeline-marker">
                <ChartBarIcon className="timeline-icon" />
              </div>
              <div className="timeline-content glassmorphism-card">
                <div className="timeline-year">2021-2024</div>
                <h3 className="timeline-title">Expansion & Excellence</h3>
                <p className="timeline-description">
                  Achieved significant growth while maintaining the highest standards of
                  home-based care, establishing strong relationships with families and
                  healthcare providers throughout Atlanta.
                </p>
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
