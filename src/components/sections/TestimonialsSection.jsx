import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/outline';

const TestimonialsSection = () => {
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
    }
  ];

  return (
    <motion.section 
      className="ultra-testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="premium-container">
        <div className="ultra-testimonials-header">
          <h2 className="ultra-section-title">Families Trust Score ABA</h2>
          <p className="ultra-subtitle">Real stories of progress and hope</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="rating-star" />
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
