import React from 'react';
import { motion } from 'framer-motion';
import { BeakerIcon, UsersIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const FeaturesSection = () => {
  const features = [
    {
      icon: BeakerIcon,
      title: "Evidence-Based Methods",
      description: "Our approach is grounded in scientific research and proven methodologies that deliver measurable results."
    },
    {
      icon: UsersIcon,
      title: "Family-Centered Care",
      description: "We work closely with families to ensure therapy goals align with your child's unique needs and your family's values."
    },
    {
      icon: AcademicCapIcon,
      title: "Expert Therapists",
      description: "Our team consists of highly trained BCBA-certified professionals with extensive experience in autism care."
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
          <h2 className="ultra-section-title">Why Families Choose Score ABA</h2>
          <p className="ultra-subtitle">Experience the difference of premium ABA therapy designed for lasting results</p>
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
