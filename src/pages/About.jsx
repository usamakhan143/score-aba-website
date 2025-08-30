import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartIcon,
  BeakerIcon,
  UsersIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
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
              <h1 className="hero-banner-headline">About Score ABA</h1>
              <p className="hero-banner-subtitle">
                Pioneering excellence in Applied Behavior Analysis through compassionate care, 
                scientific rigor, and unwavering commitment to every child's potential.
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
                    To empower children with autism and developmental differences to achieve their 
                    highest potential through compassionate, individualized Applied Behavior Analysis 
                    therapy that respects their unique strengths and challenges.
                  </p>
                </div>
                
                <div className="mission-card glassmorphism-card">
                  <div className="mission-icon-container">
                    <StarIcon className="mission-icon" />
                  </div>
                  <h3 className="mission-card-title">Our Vision</h3>
                  <p className="mission-card-text">
                    A world where every child with autism has access to quality, evidence-based 
                    care that celebrates their individuality while providing the support they need 
                    to thrive in their communities.
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
              From humble beginnings to becoming a trusted leader in ABA therapy
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
                  Score ABA was founded by a team of passionate BCBAs and autism advocates 
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
                  care, serving over 500 families and establishing partnerships with 
                  schools and healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Team Section */}
      <section className="premium-team">
        <div className="premium-container">
          <div className="team-header">
            <h2 className="premium-section-title center">Meet Our Expert Team</h2>
            <p className="premium-subtitle center">
              Board-certified professionals dedicated to transforming lives through excellence in ABA therapy
            </p>
          </div>
          
          <div className="premium-team-grid">
            <div className="premium-team-card">
              <div className="team-image-container">
                <div className="team-image-placeholder">
                  <AcademicCapIcon className="team-placeholder-icon" />
                </div>
                <div className="team-credentials-badge">
                  <span>BCBA-D</span>
                </div>
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">Dr. Emily Rodriguez</h3>
                <p className="team-member-title">Clinical Director & Founder</p>
                <p className="team-member-credentials">BCBA-D, Ph.D. in Applied Behavior Analysis</p>
                <p className="team-member-bio">
                  15+ years of experience in ABA therapy with specialization in early intervention 
                  and family-centered care. Published researcher in peer-reviewed journals.
                </p>
                <div className="team-specializations">
                  <span className="specialization-tag">Early Intervention</span>
                  <span className="specialization-tag">Research</span>
                  <span className="specialization-tag">Family Training</span>
                </div>
              </div>
            </div>
            
            <div className="premium-team-card">
              <div className="team-image-container">
                <div className="team-image-placeholder">
                  <ShieldCheckIcon className="team-placeholder-icon" />
                </div>
                <div className="team-credentials-badge">
                  <span>BCBA</span>
                </div>
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">James Wilson</h3>
                <p className="team-member-title">Senior BCBA</p>
                <p className="team-member-credentials">BCBA, M.Ed. in Special Education</p>
                <p className="team-member-bio">
                  Specialized in school-age children and adolescents, with expertise in 
                  behavioral interventions and social skills development in educational settings.
                </p>
                <div className="team-specializations">
                  <span className="specialization-tag">School-Age</span>
                  <span className="specialization-tag">Social Skills</span>
                  <span className="specialization-tag">Behavior Plans</span>
                </div>
              </div>
            </div>
            
            <div className="premium-team-card">
              <div className="team-image-container">
                <div className="team-image-placeholder">
                  <HeartIcon className="team-placeholder-icon" />
                </div>
                <div className="team-credentials-badge">
                  <span>RBT</span>
                </div>
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">Maria Santos</h3>
                <p className="team-member-title">Lead RBT & Parent Training Specialist</p>
                <p className="team-member-credentials">RBT, Certified Parent Trainer</p>
                <p className="team-member-bio">
                  Passionate about empowering families with practical strategies and 
                  supporting children in achieving their daily living and independence goals.
                </p>
                <div className="team-specializations">
                  <span className="specialization-tag">Parent Training</span>
                  <span className="specialization-tag">Daily Living Skills</span>
                  <span className="specialization-tag">Family Support</span>
                </div>
              </div>
            </div>
            
            <div className="premium-team-card">
              <div className="team-image-container">
                <div className="team-image-placeholder">
                  <ChartBarIcon className="team-placeholder-icon" />
                </div>
                <div className="team-credentials-badge">
                  <span>BCBA</span>
                </div>
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">David Chen</h3>
                <p className="team-member-title">BCBA & Research Coordinator</p>
                <p className="team-member-credentials">BCBA, M.S. in Psychology</p>
                <p className="team-member-bio">
                  Focused on evidence-based practices and data-driven treatment approaches 
                  for optimal therapeutic outcomes and continuous program improvement.
                </p>
                <div className="team-specializations">
                  <span className="specialization-tag">Data Analysis</span>
                  <span className="specialization-tag">Research</span>
                  <span className="specialization-tag">Program Development</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="team-stats">
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Families Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Family Support</div>
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
