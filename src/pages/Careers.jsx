import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  StarIcon,
  ChartBarIcon,
  LightBulbIcon,
  ClockIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Careers = () => {
  return (
    <div className="premium-careers">
      {/* Premium Careers Hero */}
      <section className="careers-hero-banner">
        <div className="careers-hero-background">
          <div className="careers-gradient-overlay"></div>
          <div className="careers-floating-elements">
            <div className="careers-float-1"></div>
            <div className="careers-float-2"></div>
            <div className="careers-float-3"></div>
          </div>
        </div>
        
        <div className="premium-container">
          <div className="careers-hero-content">
            <div className="careers-hero-text">
              <h1 className="careers-hero-headline">
                Join Our Mission
                <span className="headline-accent">Where Compassion Meets Excellence</span>
              </h1>
              <p className="careers-hero-subtitle">
                Be part of a team that transforms lives through evidence-based ABA therapy. 
                We're seeking passionate professionals who share our commitment to helping 
                children with autism reach their fullest potential.
              </p>
              <div className="careers-hero-stats">
                <div className="hero-stat-box">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Team Members</div>
                </div>
                <div className="hero-stat-box">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Employee Satisfaction</div>
                </div>
                <div className="hero-stat-box">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Avg. Tenure</div>
                </div>
              </div>
              <div className="careers-hero-cta">
                <Link to="/contact">
                  <button className="premium-btn primary-glow large">
                    <span>View Open Positions</span>
                    <ArrowRightIcon className="btn-arrow" />
                    <div className="btn-ripple"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Culture & Values */}
      <section className="premium-culture">
        <div className="premium-container">
          <div className="culture-header">
            <h2 className="premium-section-title center">
              Our Culture & Values
            </h2>
            <p className="premium-subtitle center">
              We believe that exceptional care starts with an exceptional team. 
              Discover what makes Score ABA a place where professionals thrive.
            </p>
          </div>

          <div className="premium-values-grid">
            <div className="value-card glassmorphism-card">
              <div className="value-icon-container">
                <HeartIcon className="value-icon" />
              </div>
              <h3 className="value-title">Compassionate Care</h3>
              <p className="value-description">
                We lead with empathy and understanding, creating an environment where 
                both our team members and the families we serve feel valued and supported.
              </p>
            </div>

            <div className="value-card glassmorphism-card">
              <div className="value-icon-container">
                <StarIcon className="value-icon" />
              </div>
              <h3 className="value-title">Clinical Excellence</h3>
              <p className="value-description">
                We maintain the highest standards of clinical practice through continuous 
                learning, evidence-based approaches, and commitment to professional growth.
              </p>
            </div>

            <div className="value-card glassmorphism-card">
              <div className="value-icon-container">
                <UserGroupIcon className="value-icon" />
              </div>
              <h3 className="value-title">Collaborative Spirit</h3>
              <p className="value-description">
                We work together as a unified team, sharing knowledge, supporting each other, 
                and celebrating successes together in our mission to help children thrive.
              </p>
            </div>

            <div className="value-card glassmorphism-card">
              <div className="value-icon-container">
                <LightBulbIcon className="value-icon" />
              </div>
              <h3 className="value-title">Innovation & Growth</h3>
              <p className="value-description">
                We embrace innovation and provide opportunities for professional development, 
                ensuring our team stays at the forefront of ABA therapy practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Job Opportunities */}
      <section className="premium-job-opportunities">
        <div className="premium-container">
          <div className="opportunities-header">
            <h2 className="premium-section-title center">
              Current Opportunities
            </h2>
            <p className="premium-subtitle center">
              Join our growing team and make a meaningful impact in the lives of children and families
            </p>
          </div>

          <div className="premium-jobs-grid">
            <div className="premium-job-card featured-position">
              <div className="job-card-header">
                <div className="job-icon-container primary">
                  <AcademicCapIcon className="job-icon" />
                </div>
                <div className="job-featured-badge">Featured</div>
              </div>
              <div className="job-card-content">
                <h3 className="job-title">Board Certified Behavior Analyst (BCBA)</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <MapPinIcon className="meta-icon" />
                    <span>Austin, TX / Remote</span>
                  </div>
                  <div className="job-meta-item">
                    <ClockIcon className="meta-icon" />
                    <span>Full-time</span>
                  </div>
                  <div className="job-meta-item">
                    <CurrencyDollarIcon className="meta-icon" />
                    <span>$85K - $110K</span>
                  </div>
                </div>
                <p className="job-description">
                  Lead our clinical team in developing and implementing individualized treatment plans. 
                  Provide supervision, conduct assessments, and ensure the highest quality of care for our clients.
                </p>
                <div className="job-requirements">
                  <h4 className="requirements-title">Key Requirements:</h4>
                  <ul className="requirements-list">
                    <li>BCBA certification required</li>
                    <li>2+ years of clinical experience</li>
                    <li>Experience with early intervention preferred</li>
                    <li>Strong leadership and communication skills</li>
                  </ul>
                </div>
                <Link to="/contact">
                  <button className="premium-btn job-apply-btn">
                    <span>Apply Now</span>
                    <ArrowRightIcon className="btn-arrow" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="premium-job-card">
              <div className="job-card-header">
                <div className="job-icon-container secondary">
                  <ShieldCheckIcon className="job-icon" />
                </div>
              </div>
              <div className="job-card-content">
                <h3 className="job-title">Registered Behavior Technician (RBT)</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <MapPinIcon className="meta-icon" />
                    <span>Austin, TX</span>
                  </div>
                  <div className="job-meta-item">
                    <ClockIcon className="meta-icon" />
                    <span>Part-time / Full-time</span>
                  </div>
                  <div className="job-meta-item">
                    <CurrencyDollarIcon className="meta-icon" />
                    <span>$22 - $28/hour</span>
                  </div>
                </div>
                <p className="job-description">
                  Provide direct ABA therapy services under BCBA supervision. Work one-on-one with
                  children to implement behavior intervention plans and collect data on progress.
                </p>
                <div className="job-requirements">
                  <h4 className="requirements-title">Key Requirements:</h4>
                  <ul className="requirements-list">
                    <li>RBT certification or willingness to obtain</li>
                    <li>High school diploma or equivalent</li>
                    <li>Experience working with children preferred</li>
                    <li>Reliable transportation</li>
                  </ul>
                </div>
                <Link to="/contact">
                  <button className="premium-btn job-apply-btn outline">
                    <span>Apply Now</span>
                    <ArrowRightIcon className="btn-arrow" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="premium-job-card">
              <div className="job-card-header">
                <div className="job-icon-container tertiary">
                  <ChartBarIcon className="job-icon" />
                </div>
              </div>
              <div className="job-card-content">
                <h3 className="job-title">Clinical Support Specialist</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <MapPinIcon className="meta-icon" />
                    <span>Austin, TX</span>
                  </div>
                  <div className="job-meta-item">
                    <ClockIcon className="meta-icon" />
                    <span>Full-time</span>
                  </div>
                  <div className="job-meta-item">
                    <CurrencyDollarIcon className="meta-icon" />
                    <span>$45K - $55K</span>
                  </div>
                </div>
                <p className="job-description">
                  Support our clinical team with administrative tasks, family coordination,
                  and data management. Help ensure smooth operations and excellent family experience.
                </p>
                <div className="job-requirements">
                  <h4 className="requirements-title">Key Requirements:</h4>
                  <ul className="requirements-list">
                    <li>Bachelor's degree preferred</li>
                    <li>Strong organizational skills</li>
                    <li>Experience with healthcare administration</li>
                    <li>Excellent communication skills</li>
                  </ul>
                </div>
                <Link to="/contact">
                  <button className="premium-btn job-apply-btn outline">
                    <span>Apply Now</span>
                    <ArrowRightIcon className="btn-arrow" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="premium-job-card">
              <div className="job-card-header">
                <div className="job-icon-container quaternary">
                  <UserGroupIcon className="job-icon" />
                </div>
              </div>
              <div className="job-card-content">
                <h3 className="job-title">Family Support Coordinator</h3>
                <div className="job-meta">
                  <div className="job-meta-item">
                    <MapPinIcon className="meta-icon" />
                    <span>Austin, TX / Hybrid</span>
                  </div>
                  <div className="job-meta-item">
                    <ClockIcon className="meta-icon" />
                    <span>Full-time</span>
                  </div>
                  <div className="job-meta-item">
                    <CurrencyDollarIcon className="meta-icon" />
                    <span>$50K - $60K</span>
                  </div>
                </div>
                <p className="job-description">
                  Serve as the primary liaison between families and our clinical team.
                  Coordinate services, provide family training, and ensure exceptional family experience.
                </p>
                <div className="job-requirements">
                  <h4 className="requirements-title">Key Requirements:</h4>
                  <ul className="requirements-list">
                    <li>Bachelor's degree in related field</li>
                    <li>Experience with autism/developmental disabilities</li>
                    <li>Strong interpersonal skills</li>
                    <li>Bilingual (Spanish) preferred</li>
                  </ul>
                </div>
                <Link to="/contact">
                  <button className="premium-btn job-apply-btn outline">
                    <span>Apply Now</span>
                    <ArrowRightIcon className="btn-arrow" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Benefits & Perks */}
      <section className="premium-benefits">
        <div className="benefits-background">
          <div className="benefits-gradient-overlay"></div>
        </div>
        
        <div className="premium-container">
          <div className="benefits-header">
            <h2 className="premium-section-title center white">
              Comprehensive Benefits & Perks
            </h2>
            <p className="premium-subtitle center white">
              We invest in our team members' success with competitive compensation 
              and comprehensive benefits designed to support your personal and professional growth.
            </p>
          </div>

          <div className="premium-benefits-grid">
            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon-container">
                <BanknotesIcon className="benefit-icon" />
              </div>
              <h3 className="benefit-title">Competitive Compensation</h3>
              <p className="benefit-description">
                Market-competitive salaries with annual reviews and performance-based increases.
              </p>
            </div>

            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon-container">
                <ShieldCheckIcon className="benefit-icon" />
              </div>
              <h3 className="benefit-title">Health & Wellness</h3>
              <p className="benefit-description">
                Comprehensive medical, dental, and vision insurance with company contribution to premiums.
              </p>
            </div>

            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon-container">
                <CalendarDaysIcon className="benefit-icon" />
              </div>
              <h3 className="benefit-title">Work-Life Balance</h3>
              <p className="benefit-description">
                Flexible scheduling, paid time off, and support for maintaining healthy work-life integration.
              </p>
            </div>

            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon-container">
                <AcademicCapIcon className="benefit-icon" />
              </div>
              <h3 className="benefit-title">Professional Development</h3>
              <p className="benefit-description">
                Continuing education reimbursement, conference attendance, and supervision for certification hours.
              </p>
            </div>

            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon-container">
                <TrophyIcon className="benefit-icon" />
              </div>
              <h3 className="benefit-title">Career Growth</h3>
              <p className="benefit-description">
                Clear advancement pathways with mentorship and leadership development opportunities.
              </p>
            </div>

            <div className="benefit-card glassmorphism-card">
              <div className="benefit-icon-container">
                <GlobeAltIcon className="benefit-icon" />
              </div>
              <h3 className="benefit-title">Remote Options</h3>
              <p className="benefit-description">
                Hybrid and remote work opportunities for eligible positions with flexible arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Careers CTA */}
      <section className="careers-cta-banner">
        <div className="careers-cta-background">
          <div className="careers-cta-gradient"></div>
          <div className="careers-cta-floating">
            <div className="careers-cta-float-1"></div>
            <div className="careers-cta-float-2"></div>
          </div>
        </div>
        
        <div className="premium-container">
          <div className="careers-cta-content">
            <h2 className="careers-cta-headline">
              Ready to Make a Meaningful Impact?
            </h2>
            <p className="careers-cta-subtext">
              Join our team of dedicated professionals and help transform the lives of children 
              and families through exceptional ABA therapy services.
            </p>
            <div className="careers-cta-actions">
              <Link to="/contact">
                <button className="premium-btn cta-primary large">
                  <span>Browse All Positions</span>
                  <div className="btn-glow-effect"></div>
                </button>
              </Link>
              <Link to="/contact">
                <button className="premium-btn cta-secondary-outline large">
                  <span>Submit General Application</span>
                </button>
              </Link>
            </div>
            <div className="careers-cta-contact">
              <p className="contact-text">
                Questions about careers at Score ABA?
                <Link to="/contact" className="contact-link">Contact our HR team</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
