import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  StarIcon,
  ArrowRightIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="premium-footer">

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-background-elements">
          <div className="footer-gradient-orb footer-orb-1"></div>
          <div className="footer-gradient-orb footer-orb-2"></div>
          <div className="footer-pattern"></div>
        </div>

        <div className="footer-container">
          <div className="footer-content-grid">
            
            {/* Company Section */}
            <div className="footer-section company-section">
              <div className="footer-logo-container">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F24ddbbf5205f48d3a7f451d9a329eb76?format=webp&width=800"
                  alt="Score ABA Logo"
                  className="footer-logo-image"
                />
                <div className="footer-tagline">Where Progress is the Score</div>
              </div>
              
              <p className="footer-description">
                Empowering children with autism to reach their full potential through
                compassionate, family-centered ABA therapy that celebrates each child's unique journey.
              </p>

              <div className="footer-credentials">
                <div className="credential-item">
                  <HeartIcon className="credential-icon" />
                  <span>Family-Centered</span>
                </div>
                <div className="credential-item">
                  <StarIcon className="credential-icon" />
                  <span>Home-Based</span>
                </div>
                <div className="credential-item">
                  <ShieldCheckIcon className="credential-icon" />
                  <span>Personalized Care</span>
                </div>
              </div>

              <div className="footer-social-links">
                <h5 className="social-heading">Connect With Us</h5>
                <div className="social-links-grid">
                  <a href="#" className="social-link facebook" aria-label="Facebook">
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link instagram" aria-label="Instagram">
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link youtube" aria-label="YouTube">
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-section-title">Company</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/" className="footer-nav-link">
                    <span>Home</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-nav-link">
                    <span>About Us</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="footer-nav-link">
                    <span>Careers</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="footer-nav-link">
                    <span>Blog & Resources</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-nav-link">
                    <span>Contact Us</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-section-title">Our Services</h4>
              <ul className="footer-links-list">
                <li>
                  <Link to="/services" className="footer-nav-link">
                    <span>In-Home ABA Therapy</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-nav-link">
                    <span>Behavioral Support at Home</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-nav-link">
                    <span>Developmental Assessments</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-nav-link">
                    <span>Parent & Family Training</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-nav-link">
                    <span>Assessment Services</span>
                    <ArrowRightIcon className="link-arrow" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="footer-section contact-section">
              <h4 className="footer-section-title">Get In Touch</h4>
              
              <div className="footer-contact-info">
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <MapPinIcon className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Service Areas</div>
                    <div className="contact-value">Atlanta & Surrounding Areas</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <PhoneIcon className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">(404) 555-0123</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <EnvelopeIcon className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">info@scoreaba.com</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <ClockIcon className="contact-icon" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Business Hours</div>
                    <div className="contact-value">
                      Mon-Fri: 8AM-6PM<br />
                      Sat: 9AM-3PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-cta-button">
                <Link to="/contact" className="footer-cta-link">
                  <span>Schedule Consultation</span>
                  <ArrowRightIcon className="cta-arrow" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>© 2025 Score ABA. All rights reserved.</p>
            </div>
            

            <button 
              onClick={scrollToTop}
              className="scroll-to-top-btn"
              aria-label="Scroll to top"
            >
              <ChevronUpIcon className="scroll-up-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
