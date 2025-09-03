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
                  Atlanta's Premier
                </span>
                <span className="hero-text-line">
                  In-Home ABA Therapy Services
                </span>
                <span className="headline-accent-ultra">
                  Where Progress is the Score
                </span>
              </h1>

              <p className="ultra-hero-subheadline">
                Personalized autism therapy delivered in the comfort of your Atlanta home.
                Our BCBA certified professionals provide evidence-based in-home ABA therapy
                tailored to your child's unique needs and your family's schedule.
              </p>

              <div className="ultra-cta-group">
                <Link to="/contact">
                  <button className="ultra-btn primary-explosive">
                    <span>Start Atlanta Services Today</span>
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
                  <span className="ultra-progress-number">ABA</span>
                  <span className="ultra-progress-label">Certified</span>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SEO Intro Section */}
      <motion.section
        className="seo-intro-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="premium-container">
          <div className="seo-intro-content">
            <p className="seo-intro-text">
              Score ABA is Atlanta's leading provider of <strong>in-home ABA therapy</strong> services for children with autism.
              Our specialized <strong>ABA therapy Atlanta</strong> programs bring certified BCBA therapists directly to your home,
              providing personalized <strong>autism therapy Georgia</strong> families trust. We focus exclusively on home-based
              interventions that help children develop essential skills in their natural environment while supporting families
              throughout their journey.
            </p>
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
              { number: "Expert", label: "BCBA Team" },
              { number: "Quality", label: "Care Focus" },
              { number: "Home", label: "Based Services" },
              { number: "Family", label: "Support" }
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

      {/* Home-Based Therapy Section */}
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
                  alt="Family therapy session in a comfortable home environment with therapist and family"
                  className="facility-main-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="facility-secondary-images">
                <div className="secondary-facility-image">
                  <img
                    src="https://images.pexels.com/photos/8653978/pexels-photo-8653978.jpeg"
                    alt="Child engaged in home-based therapy activities in a familiar setting"
                    className="facility-secondary-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="secondary-facility-image">
                  <img
                    src="https://images.pexels.com/photos/6941996/pexels-photo-6941996.jpeg"
                    alt="Children learning and playing together in a home environment"
                    className="facility-secondary-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="facility-text-content">
              <h2 className="ultra-section-title">Comfort of Your Own Home</h2>
              <p className="ultra-subtitle">
                We bring expert ABA therapy directly to your home in Atlanta, creating a comfortable,
                familiar environment where your child can learn and grow with their family nearby.
              </p>
              <div className="facility-highlights">
                <div className="facility-highlight">
                  <h4>Familiar Environment</h4>
                  <p>Therapy in your child's natural setting helps with skill generalization and reduces anxiety.</p>
                </div>
                <div className="facility-highlight">
                  <h4>Family Involvement</h4>
                  <p>Parents and siblings can participate and learn strategies to support progress throughout the day.</p>
                </div>
                <div className="facility-highlight">
                  <h4>Flexible Scheduling</h4>
                  <p>Sessions work around your family's routine and schedule, making therapy convenient and accessible.</p>
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
