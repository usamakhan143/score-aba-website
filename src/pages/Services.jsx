import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  BuildingOfficeIcon,
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
                Evidence-based Applied Behavior Analysis therapy delivered through personalized 
                programs designed to maximize your child's potential and support your family's journey.
              </p>
              <div className="services-hero-stats">
                <div className="hero-stat-item">
                  <div className="stat-icon-container">
                    <CheckCircleIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-icon-container">
                    <ClockIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>
                <div className="hero-stat-item">
                  <div className="stat-icon-container">
                    <UsersIcon className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Families Served</span>
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
              Our Service Portfolio
            </h2>
            <p className="premium-subtitle center">
              Comprehensive ABA therapy programs designed to meet every child where they are 
              and help them reach their fullest potential
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
                <h3 className="service-card-title">In-Home ABA Therapy</h3>
                <p className="service-card-description">
                  One-on-one therapy sessions in the comfort and familiarity of your own home. 
                  Our certified therapists work with your child in their natural environment, 
                  making learning more meaningful and helping generalize skills to daily routines.
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
                  <BuildingOfficeIcon className="service-icon" />
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">Clinic-Based Programs</h3>
                <p className="service-card-description">
                  Structured therapy sessions in our supportive, well-equipped clinic environment.
                  Perfect for intensive skill building with access to specialized materials and
                  opportunities for peer interaction.
                </p>
                <div className="service-features">
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Intensive skill building</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Specialized equipment & materials</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Social interaction opportunities</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Group programming available</span>
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
                <h3 className="service-card-title">School Support Services</h3>
                <p className="service-card-description">
                  Collaborative support with teachers and school staff to ensure your child's
                  success in educational settings. We provide consultation, training, and direct
                  support to bridge home and school learning.
                </p>
                <div className="service-features">
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>IEP & 504 plan support</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Teacher training & consultation</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Classroom observation</span>
                  </div>
                  <div className="feature-item">
                    <CheckCircleIcon className="feature-check" />
                    <span>Transition planning</span>
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
                <h3 className="service-card-title">Parent & Family Training</h3>
                <p className="service-card-description">
                  Comprehensive training programs that empower parents and families with the tools
                  and strategies needed to support their child's progress beyond therapy sessions.
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
              Our Evidence-Based Process
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
                  Development of evidence-based intervention strategies and measurable goals 
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
                Evidence-based strategies to address challenging behaviors and promote 
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
                <span>BCBA Certified Team</span>
              </div>
              <div className="trust-item">
                <StarIcon className="trust-icon" />
                <span>Evidence-Based Approach</span>
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
