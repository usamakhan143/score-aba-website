import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  BeakerIcon,
  ShieldCheckIcon,
  HomeIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  HeartIcon,
  AcademicCapIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  PlayIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const testimonials = [
    {
      name: 'Sophia Martinez',
      role: 'Parent of 6-year-old',
      quote: "Score ABA changed our lives. Within months, we saw improvements in communication and daily living skills.",
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'David Chen', 
      role: 'Parent of 4-year-old',
      quote: "The team's compassion and data-driven approach gave us clarity and confidence. We felt supported every step.",
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Amelia Thompson',
      role: 'Parent of 8-year-old', 
      quote: "Our therapist tailored every session to our child's needs. The progress has been remarkable and consistent.",
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'James Wilson',
      role: 'Parent of 5-year-old',
      quote: "Professional, trustworthy, and effective. We recommend Score ABA to every family seeking real results.",
      rating: 5,
      avatar: 'JW'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Reduce particles for better performance
    const newParticles = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);

    // Heavily throttle mouse movement
    let timeoutId;
    const throttledMouseMove = (e) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        timeoutId = null;
      }, 50);
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => setActiveTestimonial((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="premium-home" ref={containerRef}>
      {/* Simplified Particles Background */}
      <div className="floating-particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: 0,
            }}
            animate={{
              x: particle.x + particle.speedX * 30,
              y: particle.y + particle.speedY * 30,
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* Simplified Mouse Follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: "easeOut",
        }}
      />

      {/* Ultra Premium Hero Section */}
      <motion.section 
        className="ultra-premium-hero"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-background-simple">
          <div className="simple-gradient-orb"></div>
        </div>

        <div className="premium-hero-container">
          <div className="hero-content-grid">
            <motion.div className="hero-text-content" variants={itemVariants}>
              <motion.h1 
                className="ultra-hero-headline"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.5
                }}
              >
                <motion.span 
                  className="hero-text-line"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Score ABA
                </motion.span>
                <motion.span 
                  className="headline-accent-ultra"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  Where Progress is the Score
                </motion.span>
              </motion.h1>

              <motion.p 
                className="ultra-hero-subheadline"
                variants={itemVariants}
              >
                Transform your child's potential with family-centered ABA therapy delivered by experienced professionals.
                Experience personalized care that adapts to your family's unique journey toward measurable progress.
              </motion.p>

              <motion.div 
                className="ultra-cta-group"
                variants={itemVariants}
              >
                <Link to="/contact">
                  <motion.button
                    className="ultra-btn primary-explosive"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Start Services Today</span>
                    <RocketLaunchIcon className="btn-rocket" />
                  </motion.button>
                </Link>

                <Link to="/about">
                  <motion.button
                    className="ultra-btn secondary-glass"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Learn More</span>
                    <SparklesIcon className="btn-sparkles" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div 
                className="ultra-trust-indicators"
                variants={itemVariants}
              >
                {[
                  { icon: HomeIcon, text: "Home-Based" },
                  { icon: HeartIcon, text: "Family-Centered" },
                  { icon: UsersIcon, text: "Personalized Care" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="ultra-trust-item"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(122, 95, 188, 0.1)",
                    }}
                  >
                    <item.icon className="ultra-trust-icon" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-visual-content"
              variants={itemVariants}
            >
              <motion.div 
                className="ultra-hero-image-container"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring" }}
              >
                <div className="hero-image-frame-ultra">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F34d57351365f4f70839256d3eca00d7b?format=webp&width=1200" 
                    alt="Professional ABA therapist working with child"
                    className="ultra-hero-img"
                  />
                  <div className="ultra-image-overlay"></div>
                  
                  <div className="ultra-progress-indicator">
                    <div className="ultra-progress-circle">
                      <div className="ultra-progress-text">
                        <span className="ultra-progress-number">ABA</span>
                        <span className="ultra-progress-label">Therapy</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </motion.section>

      {/* Animated Trust Strip */}
      <motion.section 
        className="ultra-trust-strip"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="premium-container">
          <motion.div 
            className="ultra-trust-grid"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {['Insurance Accepted', 'Aetna', 'Cigna', 'UnitedHealthcare', 'Blue Cross Blue Shield'].map((item, index) => (
              <motion.div
                key={index}
                className="ultra-trust-pill"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(122, 95, 188, 0.1)",
                }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Explosive Success Metrics */}
      <motion.section
        className="ultra-success-metrics"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="premium-container">
          <motion.div 
            className="ultra-metrics-grid"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
          >
            {[
              { number: '500+', label: 'Families Served' },
              { number: '50k+', label: 'Therapy Hours' },
              { number: 'Expert', label: 'Care Team' },
              { number: '50+', label: 'Clinicians' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="ultra-metric-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="ultra-metric-number">
                  {metric.number}
                </div>
                <div className="ultra-metric-label">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Continue with other sections... */}
      {/* For brevity, I'll show the pattern but you'd apply similar ultra-animations to all sections */}

      {/* Revolutionary Features Section */}
      <motion.section
        className="ultra-features"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="premium-container">
          <motion.div 
            className="ultra-features-header"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="ultra-section-title">Why Families Choose Score ABA</h2>
            <p className="ultra-subtitle">Experience the difference of premium ABA therapy designed for lasting results</p>
          </motion.div>
          
          <motion.div 
            className="ultra-features-grid"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
          >
            {[
              { icon: BeakerIcon, title: "Family-Centered Excellence", desc: "Our interventions are grounded in compassionate care and proven methodologies" },
              { icon: ShieldCheckIcon, title: "Expert Care Team", desc: "Work with experienced therapists who are passionate about your child's success" },
              { icon: HomeIcon, title: "Home-Based Care Settings", desc: "Therapy delivered in the comfort and familiarity of your own home environment" },
              { icon: UsersIcon, title: "Comprehensive Family Support", desc: "Receive ongoing parent training and support to reinforce progress beyond therapy sessions" },
              { icon: ClipboardDocumentCheckIcon, title: "Data-Driven Progress", desc: "Track meaningful improvements with transparent reporting and regular progress assessments" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="ultra-feature-card"
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -30 },
                  visible: { opacity: 1, y: 0, rotateX: 0 },
                }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(122, 95, 188, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="ultra-feature-icon-container"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(122, 95, 188, 0.3)",
                      "0 0 40px rgba(2, 183, 255, 0.3)",
                      "0 0 20px rgba(122, 95, 188, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <feature.icon className="ultra-feature-icon" />
                </motion.div>
                <h3 className="ultra-feature-title">{feature.title}</h3>
                <p className="ultra-feature-description">{feature.desc}</p>
                <motion.div 
                  className="ultra-feature-line"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Ultra Testimonials with 3D carousel */}
      <motion.section
        className="ultra-testimonials"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="premium-container">
          <motion.div 
            className="ultra-testimonials-header"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="ultra-section-title">Families Trust Score ABA</h2>
            <p className="ultra-subtitle">Real stories of progress and hope</p>
          </motion.div>
          
          <div className="ultra-testimonial-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="ultra-testimonial-card"
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="ultra-quote-icon"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <ChatBubbleBottomCenterTextIcon className="quote-icon" />
                </motion.div>
                <p className="ultra-testimonial-quote">{testimonials[activeTestimonial].quote}</p>
                <div className="ultra-testimonial-rating">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <div key={i}>
                      <StarIcon className="ultra-rating-star" />
                    </div>
                  ))}
                </div>
                <div className="ultra-testimonial-author">
                  <div className="ultra-author-badge">
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div className="ultra-author-details">
                    <span className="ultra-author-name">{testimonials[activeTestimonial].name}</span>
                    <span className="ultra-author-role">{testimonials[activeTestimonial].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              className="ultra-slider-arrow left"
              onClick={prevTestimonial}
            >
              <ChevronLeftIcon className="arrow-icon" />
            </button>
            
            <button
              className="ultra-slider-arrow right"
              onClick={nextTestimonial}
            >
              <ChevronRightIcon className="arrow-icon" />
            </button>
          </div>
          
          <div className="ultra-slider-dots">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                className={`ultra-dot ${activeTestimonial === i ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{
                  scale: activeTestimonial === i ? 1.2 : 1,
                  backgroundColor: activeTestimonial === i ? '#7A5FBC' : 'rgba(122, 95, 188, 0.3)',
                }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Comprehensive Therapy Approach Section */}
      <motion.section
        className="therapy-approach-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-30px" }}
      >
        <div className="premium-container">
          <div className="therapy-approach-grid">
            <motion.div
              className="therapy-approach-content"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="ultra-section-title">Personalized ABA Therapy That Works</h2>
              <p className="ultra-subtitle">
                Our family-centered approach combines compassionate care with proven methodologies to help children with autism reach their full potential.
              </p>
              <div className="therapy-benefits-grid">
                <div className="therapy-benefit-item">
                  <CheckCircleIcon className="benefit-icon" />
                  <div>
                    <h3>Individualized Treatment Plans</h3>
                    <p>Every child receives a customized therapy program designed around their unique strengths and needs.</p>
                  </div>
                </div>
                <div className="therapy-benefit-item">
                  <CheckCircleIcon className="benefit-icon" />
                  <div>
                    <h3>Family-Centered Approach</h3>
                    <p>We work closely with families to ensure therapy goals align with home and community settings.</p>
                  </div>
                </div>
                <div className="therapy-benefit-item">
                  <CheckCircleIcon className="benefit-icon" />
                  <div>
                    <h3>Measurable Progress</h3>
                    <p>Data-driven assessments track improvements in communication, social skills, and daily living abilities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="therapy-approach-visual"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="therapy-image-collage">
                <div className="collage-main-image">
                  <img
                    src="https://images.pexels.com/photos/8653952/pexels-photo-8653952.jpeg"
                    alt="Young boy writing while therapist observes in a modern office"
                    className="main-therapy-image"
                  />
                  <div className="therapy-image-overlay">
                    <div className="therapy-stat-badge">
                      <span className="stat-number">Home</span>
                      <span className="stat-label">Based Care</span>
                    </div>
                  </div>
                </div>
                <div className="collage-secondary-images">
                  <div className="secondary-image">
                    <img
                      src="https://images.pexels.com/photos/7943262/pexels-photo-7943262.jpeg"
                      alt="Young Asian girl with Down Syndrome engaged in a game indoors"
                      className="small-therapy-image"
                    />
                  </div>
                  <div className="secondary-image">
                    <img
                      src="https://images.pexels.com/photos/590472/pexels-photo-590472.jpeg"
                      alt="Joyful brother and sister smiling outdoors in sunlit garden"
                      className="small-therapy-image"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Specialized Support Section */}
      <motion.section
        className="specialized-support-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-30px" }}
      >
        <div className="premium-container">
          <div className="specialized-support-grid">
            <motion.div
              className="specialized-support-visual"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="support-image-collage">
                <div className="collage-grid">
                  <div className="large-support-image">
                    <img
                      src="https://images.pexels.com/photos/6986442/pexels-photo-6986442.jpeg"
                      alt="Dedicated tutor helps young boy with homework on laptop"
                      className="primary-support-image"
                    />
                  </div>
                  <div className="small-support-images">
                    <div className="small-support-image">
                      <img
                        src="https://images.pexels.com/photos/6288088/pexels-photo-6288088.jpeg"
                        alt="Adult woman and child with Down syndrome engaging in playful interaction"
                        className="secondary-support-image"
                      />
                    </div>
                    <div className="small-support-image">
                      <img
                        src="https://images.pexels.com/photos/8653978/pexels-photo-8653978.jpeg"
                        alt="Young girl engaged in play therapy with psychologist guidance"
                        className="secondary-support-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="support-image-overlay">
                  <div className="support-badge">
                    <SparklesIcon className="support-badge-icon" />
                    <span>Expert Care</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="specialized-support-content"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="ultra-section-title">Specialized Support for Every Child</h2>
              <p className="ultra-subtitle">
                Our team of experienced professionals provides comprehensive support tailored to each child's developmental needs and family goals.
              </p>

              <div className="support-features-list">
                <div className="support-feature">
                  <div className="support-feature-icon">
                    <AcademicCapIcon className="feature-icon" />
                  </div>
                  <div className="support-feature-content">
                    <h3>Expert-Supervised Programs</h3>
                    <p>All therapy programs are designed and overseen by experienced professionals with extensive experience in autism intervention.</p>
                  </div>
                </div>

                <div className="support-feature">
                  <div className="support-feature-icon">
                    <HeartIcon className="feature-icon" />
                  </div>
                  <div className="support-feature-content">
                    <h3>Compassionate Care Team</h3>
                    <p>Our dedicated therapists combine professional expertise with genuine care to create a supportive environment for growth.</p>
                  </div>
                </div>

                <div className="support-feature">
                  <div className="support-feature-icon">
                    <HomeIcon className="feature-icon" />
                  </div>
                  <div className="support-feature-content">
                    <h3>Flexible Service Options</h3>
                    <p>Choose from in-home, clinic-based, or community settings to best fit your family's schedule and preferences.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Continue with CTA section... */}
      <motion.section
        className="ultra-cta-finale"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-30px" }}
      >
        <div className="ultra-cta-cosmic-bg">
          <motion.div 
            className="cosmic-orb orb-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div 
            className="cosmic-orb orb-2"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />
        </div>
        
        <div className="premium-container">
          <motion.div
            className="ultra-cta-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.h2 
              className="ultra-cta-headline"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Take the first step towards measurable progress today
            </motion.h2>
            <p className="ultra-cta-subtext">
              Join hundreds of families who have discovered the transformative power of expert ABA therapy
            </p>
            <Link to="/contact">
              <motion.button
                className="ultra-btn finale-explosive"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 30px 60px rgba(122, 95, 188, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(122, 95, 188, 0.5)",
                    "0 0 60px rgba(2, 183, 255, 0.5)",
                    "0 0 30px rgba(122, 95, 188, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <span>Begin Your Journey</span>
                <motion.div
                  className="btn-cosmic-explosion"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
