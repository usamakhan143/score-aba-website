import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, ShieldCheckIcon, DocumentTextIcon, UsersIcon, HomeIcon } from '@heroicons/react/24/outline';

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPinIcon,
      title: "Atlanta's Leading In-Home ABA Specialists",
      description: "Recognized as the premier provider of in-home ABA therapy services throughout Atlanta, Georgia and surrounding areas."
    },
    {
      icon: ShieldCheckIcon,
      title: "Experienced Therapists",
      description: "Our entire clinical team has extensive experience in autism intervention and compassionate care delivery."
    },
    {
      icon: DocumentTextIcon,
      title: "Personalized Home Treatment Plans",
      description: "Every treatment plan is individually designed for your child's unique needs and delivered in your home environment."
    },
    {
      icon: UsersIcon,
      title: "Family Collaboration & Training",
      description: "We work closely with families, providing ongoing training and support to ensure therapy success beyond sessions."
    },
    {
      icon: HomeIcon,
      title: "Convenient Home-Based Sessions",
      description: "All therapy sessions are conducted in the comfort of your own home, eliminating travel and creating a familiar learning environment."
    }
  ];

  return (
    <motion.section 
      className="ultra-features"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="premium-container">
        <div className="ultra-features-header">
          <h2 className="ultra-section-title">Why Choose Score ABA Atlanta?</h2>
          <p className="ultra-subtitle">Experience the difference of specialized in-home ABA therapy delivered by Atlanta's leading autism specialists</p>
        </div>
        
        <div className="ultra-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="ultra-feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="ultra-feature-icon-container">
                <feature.icon className="ultra-feature-icon" />
              </div>
              <h3 className="ultra-feature-title">{feature.title}</h3>
              <p className="ultra-feature-description">{feature.description}</p>
              <div className="ultra-feature-line"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
