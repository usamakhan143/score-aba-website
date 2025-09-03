import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  AcademicCapIcon,
  UsersIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  ChartBarIcon,
  HeartIcon,
  BeakerIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  return (
    <div className="premium-services">
      {/* Premium Services Hero */}
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
                Comprehensive ABA Services
                <span className="headline-accent">Tailored to Your Child's Unique Needs</span>
              </h1>
              <p className="services-hero-subtitle">
                Compassionate Applied Behavior Analysis therapy delivered through personalized
                programs designed to maximize your child's potential and support your family's journey.
              </p>
              <div className="services-hero-stats">
                <div className="hero-stat-item">
                  <div className="stat-icon-container">
                    <HomeIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">Home</span>
                    <span className="stat-label">Based Only</span>
                  </div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-icon-container">
                    <UsersIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">Family</span>
                    <span className="stat-label">Focused</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Offerings */}
      <section className="premium-service-offerings">
        <div className="premium-container">
          <div className="service-offerings-header">
            <h2 className="premium-section-title center">
              In-Home ABA Therapy Atlanta Services
            </h2>
            <p className="premium-subtitle center">
              Specialized <strong>in-home ABA therapy Atlanta</strong> services delivered in your home.
              Our <strong>home-based autism services</strong> are provided exclusively in your family's natural environment throughout Atlanta, Georgia.
            </p>
          </div>

          <div className="premium-services-grid">
            <div className="premium-service-card featured-service">
              <div className="service-card-header">
                <div className="service-icon-container primary">
                  <HomeIcon className="service-icon" />
                </div>
                <div className="service-badge">Most Popular</div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">In-Home ABA Therapy (Atlanta)</h3>
                <p className="service-card-description">
                  Premier <strong>in-home ABA therapy Atlanta</strong> services delivered by experienced therapists.
                  One-on-one therapy sessions in the comfort and familiarity of your own home throughout
                  Atlanta, Georgia. Our family-centered approach helps children develop essential skills in their natural environment.
                </p>
                <div className="service-features">
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Personalized 1:1 sessions</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Natural environment learning</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Family involvement & training</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Flexible scheduling</span>
                  </div>
                </div>
                <div className="service-card-footer">
                  <Link to="/contact">
                    <button className="premium-btn service-cta">
                      <span>Learn More</span>
                      <ArrowRightIcon className="btn-arrow" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="premium-service-card">
              <div className="service-card-header">
                <div className="service-icon-container secondary">
                  <HeartIcon className="service-icon" />
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">Behavior Intervention Plans</h3>
                <p className="service-card-description">
                  Comprehensive behavior intervention plans designed specifically for your child's unique needs.
                  Our expert team develops individualized strategies to address challenging behaviors and
                  promote positive skill development in your Atlanta home.
                </p>
                <div className="service-features">
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Individualized behavior plans</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Functional behavior assessments</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Family-centered interventions</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Progress monitoring & adjustments</span>
                  </div>
                </div>
                <div className="service-card-footer">
                  <Link to="/contact">
                    <button className="premium-btn service-cta outline">
                      <span>Learn More</span>
                      <ArrowRightIcon className="btn-arrow" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="premium-service-card">
              <div className="service-card-header">
                <div className="service-icon-container tertiary">
                  <AcademicCapIcon className="service-icon" />
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">Developmental Assessments</h3>
                <p className="service-card-description">
                  Comprehensive developmental assessments conducted in your Atlanta home to identify
                  your child's strengths and areas for growth. Our experienced team provides
                  detailed evaluations that inform personalized treatment planning.
                </p>
                <div className="service-features">
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Comprehensive evaluations</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Skills-based assessments</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Treatment plan development</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Progress evaluation reports</span>
                  </div>
                </div>
                <div className="service-card-footer">
                  <Link to="/contact">
                    <button className="premium-btn service-cta outline">
                      <span>Learn More</span>
                      <ArrowRightIcon className="btn-arrow" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="premium-service-card">
              <div className="service-card-header">
                <div className="service-icon-container quaternary">
                  <UsersIcon className="service-icon" />
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">Parent Training & Coaching</h3>
                <p className="service-card-description">
                  Comprehensive parent training and coaching programs delivered in your Atlanta home.
                  We empower parents and families with the tools and strategies needed to support
                  their child's progress and implement ABA techniques throughout daily routines.
                </p>
                <div className="service-features">
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Behavior management strategies</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Communication techniques</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Crisis intervention</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Ongoing support & coaching</span>
                  </div>
                </div>
                <div className="service-card-footer">
                  <Link to="/contact">
                    <button className="premium-btn service-cta outline">
                      <span>Learn More</span>
                      <ArrowRightIcon className="btn-arrow" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Process Section */}
      <section className="premium-service-process">
        <div className="process-background">
          <div className="process-gradient-overlay"></div>
        </div>
        
        <div className="premium-container">
          <div className="process-header">
            <h2 className="premium-section-title center white">
              Our Family-Centered Process
            </h2>
            <p className="premium-subtitle center white">
              A systematic approach to ABA therapy that ensures consistent progress 
              and measurable outcomes for every child
            </p>
          </div>

          <div className="premium-process-steps">
            <div className="process-step">
              <div className="process-step-number">01</div>
              <div className="process-step-content glassmorphism-card">
                <div className="process-icon-container">
                  <BeakerIcon className="process-icon" />
                </div>
                <h3 className="process-step-title">Comprehensive Assessment</h3>
                <p className="process-step-description">
                  In-depth evaluation of your child's strengths, challenges, and learning style 
                  to create a personalized treatment plan tailored to their unique needs.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">02</div>
              <div className="process-step-content glassmorphism-card">
                <div className="process-icon-container">
                  <ChartBarIcon className="process-icon" />
                </div>
                <h3 className="process-step-title">Individualized Program Design</h3>
                <p className="process-step-description">
                  Development of family-centered intervention strategies and measurable goals
                  that align with your family's priorities and your child's developmental needs.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">03</div>
              <div className="process-step-content glassmorphism-card">
                <div className="process-icon-container">
                  <StarIcon className="process-icon" />
                </div>
                <h3 className="process-step-title">Implementation & Progress</h3>
                <p className="process-step-description">
                  Consistent delivery of therapy services with ongoing data collection and 
                  analysis to ensure your child is making meaningful progress toward their goals.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-step-number">04</div>
              <div className="process-step-content glassmorphism-card">
                <div className="process-icon-container">
                  <HeartIcon className="process-icon" />
                </div>
                <h3 className="process-step-title">Family Integration</h3>
                <p className="process-step-description">
                  Continuous family training and support to ensure skills generalize across 
                  environments and therapeutic gains are maintained long-term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Specializations */}
      <section className="premium-specializations">
        <div className="premium-container">
          <div className="specializations-header">
            <h2 className="premium-section-title center">
              Areas of Specialization
            </h2>
            <p className="premium-subtitle center">
              Our team brings specialized expertise across key domains of development
            </p>
          </div>

          <div className="specializations-grid">
            <div className="specialization-card">
              <div className="specialization-icon-container">
                <HeartIcon className="specialization-icon" />
              </div>
              <h3 className="specialization-title">Early Intervention</h3>
              <p className="specialization-description">
                Specialized programs for children ages 18 months to 6 years, focusing on 
                foundational skills and preparing for successful transitions.
              </p>
            </div>

            <div className="specialization-card">
              <div className="specialization-icon-container">
                <UsersIcon className="specialization-icon" />
              </div>
              <h3 className="specialization-title">Social Communication</h3>
              <p className="specialization-description">
                Targeted interventions to develop language, social interaction, and 
                communication skills across various settings and contexts.
              </p>
            </div>

            <div className="specialization-card">
              <div className="specialization-icon-container">
                <ShieldCheckIcon className="specialization-icon" />
              </div>
              <h3 className="specialization-title">Behavior Management</h3>
              <p className="specialization-description">
                Family-centered strategies to address challenging behaviors and promote
                positive behavioral changes that improve quality of life.
              </p>
            </div>

            <div className="specialization-card">
              <div className="specialization-icon-container">
                <ChartBarIcon className="specialization-icon" />
              </div>
              <h3 className="specialization-title">Academic Readiness</h3>
              <p className="specialization-description">
                Pre-academic and academic skill development to support success in 
                educational environments and lifelong learning.
              </p>
            </div>

            <div className="specialization-card">
              <div className="specialization-icon-container">
                <ClockIcon className="specialization-icon" />
              </div>
              <h3 className="specialization-title">Daily Living Skills</h3>
              <p className="specialization-description">
                Building independence through self-care, domestic, and community living 
                skills that promote autonomy and confidence.
              </p>
            </div>

            <div className="specialization-card">
              <div className="specialization-icon-container">
                <StarIcon className="specialization-icon" />
              </div>
              <h3 className="specialization-title">Transition Planning</h3>
              <p className="specialization-description">
                Supporting major life transitions including school entry, program changes, 
                and preparation for adulthood and community integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services CTA */}
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
            <h2 className="services-cta-headline">
              Ready to Begin Your Child's Journey to Success?
            </h2>
            <p className="services-cta-subtext">
              Let's work together to create a personalized ABA program that meets your 
              child's unique needs and supports your family's goals.
            </p>
            <div className="services-cta-actions">
              <Link to="/contact">
                <button className="premium-btn cta-primary large">
                  <span>Start Services Today</span>
                  <div className="btn-glow-effect"></div>
                </button>
              </Link>
              <Link to="/contact">
                <button className="premium-btn cta-secondary-outline large">
                  <span>Schedule Consultation</span>
                </button>
              </Link>
            </div>
            <div className="services-cta-trust">
              <div className="trust-item">
                <ShieldCheckIcon className="trust-icon" />
                <span>Expert Care Team</span>
              </div>
              <div className="trust-item">
                <StarIcon className="trust-icon" />
                <span>Family-Centered Approach</span>
              </div>
              <div className="trust-item">
                <HeartIcon className="trust-icon" />
                <span>Family-Centered Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
