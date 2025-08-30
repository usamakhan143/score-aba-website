import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  StarIcon,
  HeartIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

// Lazy load heavy components
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const FeaturesSection = lazy(() => import('./sections/FeaturesSection'));

const OptimizedHome = () => {
  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <div className="premium-home">
      {/* Simplified Hero Section */}
      <motion.section 
        className="ultra-premium-hero"
        {...fadeIn}
      >
        <div className="premium-hero-container">
          <div className="hero-content-grid">
            <div className="hero-text-content">
              <h1 className="ultra-hero-headline">
                <span className="hero-text-line">
                  Transform Your Child's Future with
                </span>
                <span className="hero-text-line">
                  Score ABA
                </span>
                <span className="headline-accent-ultra">
                  Where Progress is the Score
                </span>
              </h1>

              <p className="ultra-hero-subheadline">
                Transform your child's potential with evidence-based ABA therapy delivered by certified professionals. 
                Experience personalized care that adapts to your family's unique journey.
              </p>

              <div className="ultra-cta-group">
                <Link to="/contact">
                  <button className="ultra-btn primary-explosive">
                    <span>Start Services Today</span>
                    <RocketLaunchIcon className="btn-rocket" />
                  </button>
                </Link>

                <Link to="/about">
                  <button className="ultra-btn secondary-glass">
                    <span>Learn More</span>
                    <SparklesIcon className="btn-sparkles" />
                  </button>
                </Link>
              </div>

              <div className="ultra-trust-indicators">
                {[
                  { icon: ShieldCheckIcon, text: "BCBA Certified" },
                  { icon: StarIcon, text: "Evidence-Based" },
                  { icon: HeartIcon, text: "Family-Centered" }
                ].map((item, index) => (
                  <div key={index} className="ultra-trust-item">
                    <item.icon className="ultra-trust-icon" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hero-visual-content">
              <div className="ultra-hero-image-container">
                <div className="hero-image-frame-ultra">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F34d57351365f4f70839256d3eca00d7b?format=webp&width=600" 
                    alt="Professional ABA therapist working with child"
                    className="ultra-hero-img"
                    loading="eager"
                    decoding="async"
                  />
                  
                  <div className="ultra-progress-indicator">
                    <div className="ultra-progress-circle">
                      <div className="ultra-progress-text">
                        <span className="ultra-progress-number">95%</span>
                        <span className="ultra-progress-label">Success Rate</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trust Strip */}
      <motion.section 
        className="ultra-trust-strip"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="premium-container">
          <div className="ultra-trust-grid">
            {[
              "BCBA Certified Therapists",
              "Evidence-Based Approach", 
              "Personalized Treatment Plans",
              "Family Support Programs",
              "Progress Tracking Technology"
            ].map((item, index) => (
              <div key={index} className="ultra-trust-pill">
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Simplified Success Metrics */}
      <motion.section 
        className="ultra-success-metrics"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="premium-container">
          <div className="ultra-metrics-grid">
            {[
              { number: "500+", label: "Families Served" },
              { number: "95%", label: "Success Rate" },
              { number: "10+", label: "Years Experience" },
              { number: "24/7", label: "Family Support" }
            ].map((metric, index) => (
              <div key={index} className="ultra-metric-card">
                <div className="ultra-metric-number">{metric.number}</div>
                <div className="ultra-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Therapy Programs Section */}
      <motion.section
        className="therapy-programs-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="premium-container">
          <div className="therapy-programs-content">
            <div className="therapy-programs-text">
              <h2 className="ultra-section-title">Personalized Therapy Programs</h2>
              <p className="ultra-subtitle">
                Our evidence-based programs are tailored to each child's unique needs,
                fostering growth in communication, social skills, and independence.
              </p>
              <div className="therapy-features-list">
                <div className="therapy-feature-item">
                  <div className="feature-icon">✓</div>
                  <span>One-on-One Therapy Sessions</span>
                </div>
                <div className="therapy-feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Play-Based Learning Activities</span>
                </div>
                <div className="therapy-feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Behavioral Skill Development</span>
                </div>
                <div className="therapy-feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Family Training & Support</span>
                </div>
              </div>
            </div>
            <div className="therapy-programs-image">
              <img
                src="https://images.pexels.com/photos/8653978/pexels-photo-8653978.jpeg"
                alt="Young girl engaged in play therapy with psychologist's guidance indoors"
                className="therapy-session-image"
                loading="lazy"
                decoding="async"
              />
              <div className="image-overlay-gradient"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Lazy Loaded Sections */}
      <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
        <FeaturesSection />
      </Suspense>

      {/* Our Facility Section */}
      <motion.section
        className="our-facility-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="premium-container">
          <div className="facility-content">
            <div className="facility-images-grid">
              <div className="main-facility-image">
                <img
                  src="https://images.pexels.com/photos/23495757/pexels-photo-23495757.jpeg"
                  alt="Emotional family therapy session with a therapist indoors, conveying connection and support"
                  className="facility-main-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="facility-secondary-images">
                <div className="secondary-facility-image">
                  <img
                    src="https://images.pexels.com/photos/8653978/pexels-photo-8653978.jpeg"
                    alt="Young girl engaged in play therapy with psychologist's guidance indoors"
                    className="facility-secondary-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="secondary-facility-image">
                  <img
                    src="https://images.pexels.com/photos/6941996/pexels-photo-6941996.jpeg"
                    alt="Two happy children hugging in a bright art classroom with colorful papers"
                    className="facility-secondary-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="facility-text-content">
              <h2 className="ultra-section-title">Modern, Child-Friendly Environment</h2>
              <p className="ultra-subtitle">
                Our state-of-the-art facility is designed to create a comfortable,
                safe, and engaging environment where children can thrive and families feel supported.
              </p>
              <div className="facility-highlights">
                <div className="facility-highlight">
                  <h4>Sensory-Friendly Spaces</h4>
                  <p>Specially designed rooms that accommodate different sensory needs and preferences.</p>
                </div>
                <div className="facility-highlight">
                  <h4>Family Consultation Areas</h4>
                  <p>Comfortable spaces for family meetings, training sessions, and collaborative planning.</p>
                </div>
                <div className="facility-highlight">
                  <h4>Creative Learning Zones</h4>
                  <p>Interactive areas equipped with educational tools and engaging activities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
        <TestimonialsSection />
      </Suspense>

      {/* Final CTA */}
      <motion.section 
        className="ultra-cta-finale"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-30px" }}
      >
        <div className="premium-container">
          <div className="ultra-cta-content">
            <h2 className="ultra-cta-headline">
              Take the first step towards measurable progress today
            </h2>
            <p className="ultra-cta-subtext">
              Join hundreds of families who have discovered the transformative power of expert ABA therapy
            </p>
            <Link to="/contact">
              <button className="ultra-btn finale-explosive">
                <span>Begin Your Journey</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OptimizedHome;
