import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDaysIcon,
  ClockIcon,
  TagIcon,
  BookOpenIcon,
  LightBulbIcon,
  TrophyIcon,
  ArrowRightIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Blog = () => {

  const featuredPost = {
    id: 1,
    title: "The Complete Guide to Starting ABA Therapy: What Every Parent Needs to Know",
    category: "Parent Resources",
    excerpt: "Starting ABA therapy can feel overwhelming for families. This comprehensive guide walks you through everything from initial assessments to setting realistic expectations for your child's journey.",
    author: "Dr. Emily Rodriguez",
    date: "March 20, 2024",
    readTime: "8 min read",
    image: "https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F34d57351365f4f70839256d3eca00d7b?format=webp&width=800",
    tags: ["Getting Started", "Assessment", "Family Support"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "5 Evidence-Based Benefits of ABA Therapy for Children with Autism",
      category: "ABA Therapy Tips",
      excerpt: "Discover the scientifically-proven advantages of Applied Behavior Analysis and how it can transform your child's development across multiple domains.",
      author: "James Wilson",
      date: "March 18, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8654102/pexels-photo-8654102.jpeg",
      tags: ["Research", "Benefits", "Development"]
    },
    {
      id: 3,
      title: "Creating a Supportive Learning Environment at Home",
      category: "Parent Resources",
      excerpt: "Learn practical strategies for reinforcing therapy goals and creating structured, nurturing spaces that promote learning and growth.",
      author: "Maria Santos",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/6787970/pexels-photo-6787970.jpeg",
      tags: ["Home Environment", "Strategies", "Implementation"]
    },
    {
      id: 4,
      title: "Understanding Sensory Processing in Autism: A Parent's Guide",
      category: "Educational",
      excerpt: "Sensory processing differences are common in autism. Learn how to identify sensory needs and implement supportive strategies.",
      author: "Dr. Emily Rodriguez",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/6288088/pexels-photo-6288088.jpeg",
      tags: ["Sensory", "Understanding", "Support"]
    },
    {
      id: 5,
      title: "Success Story: How Emma Developed Communication Skills Through ABA",
      category: "Success Stories",
      excerpt: "Follow 6-year-old Emma's inspiring journey from nonverbal communication to speaking in full sentences through targeted ABA interventions.",
      author: "David Chen",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/33674673/pexels-photo-33674673.jpeg",
      tags: ["Success", "Communication", "Progress"]
    },
    {
      id: 6,
      title: "The Role of Data in ABA Therapy: Why It Matters",
      category: "ABA Therapy Tips",
      excerpt: "Understanding how data collection drives effective treatment decisions and ensures your child receives the most appropriate interventions.",
      author: "James Wilson",
      date: "March 8, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/2519795/pexels-photo-2519795.jpeg",
      tags: ["Data", "Progress", "Treatment"]
    },
    {
      id: 7,
      title: "Preparing for School: Transition Strategies for Children with Autism",
      category: "Educational",
      excerpt: "School transitions can be challenging. Learn evidence-based strategies to help your child succeed in educational environments.",
      author: "Maria Santos",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/6936415/pexels-photo-6936415.jpeg",
      tags: ["School", "Transition", "Education"]
    }
  ];

  return (
    <div className="premium-blog">
      {/* Premium Blog Hero */}
      <section className="blog-hero-banner">
        <div className="blog-hero-background">
          <div className="blog-gradient-overlay"></div>
          <div className="blog-floating-shapes">
            <div className="blog-shape-1"></div>
            <div className="blog-shape-2"></div>
          </div>
        </div>
        
        <div className="premium-container">
          <div className="blog-hero-content">
            <div className="blog-hero-text">
              <h1 className="blog-hero-headline">
                Resources & Insights
                <span className="headline-accent">Expert Knowledge for Every Family</span>
              </h1>
              <p className="blog-hero-subtitle">
                Discover evidence-based strategies, inspiring success stories, and practical guidance
                from our team of ABA professionals to support your child's journey.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Article */}
      <section className="premium-featured-article">
        <div className="premium-container">
          <div className="featured-article-header">
            <h2 className="premium-section-title">Featured Article</h2>
            <p className="premium-subtitle">Our latest comprehensive guide for families</p>
          </div>
          
          <div className="featured-article-card">
            <div className="featured-article-image">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="featured-img"
              />
              <div className="featured-category-badge">
                <TagIcon className="badge-icon" />
                <span>{featuredPost.category}</span>
              </div>
            </div>
            
            <div className="featured-article-content">
              <div className="featured-article-meta">
                <div className="meta-item">
                  <CalendarDaysIcon className="meta-icon" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="meta-item">
                  <ClockIcon className="meta-icon" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <h2 className="featured-article-title">{featuredPost.title}</h2>
              <p className="featured-article-excerpt">{featuredPost.excerpt}</p>
              
              <div className="featured-article-tags">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="article-tag">{tag}</span>
                ))}
              </div>
              
              <Link to={`/blog/${featuredPost.id}`}>
                <button className="premium-btn featured-read-btn">
                  <span>Read Full Article</span>
                  <ArrowRightIcon className="btn-arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="premium-latest-articles">
        <div className="premium-container">
          <div className="latest-articles-header">
            <h2 className="premium-section-title">Latest Articles</h2>
            <p className="premium-subtitle">Stay informed with our newest insights and resources</p>
          </div>
          
          <div className="premium-articles-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="premium-blog-card">
                <div className="blog-card-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="blog-category-tag">
                    <TagIcon className="tag-icon" />
                    <span>{post.category}</span>
                  </div>
                </div>

                <div className="blog-card-header">
                  <div className="blog-card-meta">
                    <div className="meta-item">
                      <ClockIcon className="meta-icon-small" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <div className="blog-card-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="blog-card-footer">
                  <Link to={`/blog/${post.id}`}>
                    <button className="blog-read-more">
                      <span>Read More</span>
                      <ArrowRightIcon className="read-more-arrow" />
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription - Redesigned */}
      <section className="modern-newsletter-section">
        <div className="newsletter-bg-pattern">
          <div className="pattern-overlay"></div>
          <div className="floating-elements">
            <div className="float-element-1"></div>
            <div className="float-element-2"></div>
            <div className="float-element-3"></div>
          </div>
        </div>

        <div className="premium-container">
          <div className="newsletter-grid">
            {/* Left Content */}
            <div className="newsletter-content-side">
              <div className="newsletter-badge">
                <EnvelopeIcon className="badge-icon" />
                <span>Newsletter</span>
              </div>

              <h2 className="newsletter-main-title">
                Stay Connected with
                <span className="title-highlight"> Score ABA</span>
              </h2>

              <p className="newsletter-description">
                Join our community of families and professionals. Get expert insights,
                practical strategies, and inspiring success stories delivered to your inbox.
              </p>

              <div className="newsletter-stats">
                <div className="stat-item">
                  <div className="stat-number">5K+</div>
                  <div className="stat-label">Subscribers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">Weekly</div>
                  <div className="stat-label">Updates</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Free</div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="newsletter-form-card">
              <div className="form-card-header">
                <h3 className="form-card-title">Get Started Today</h3>
                <p className="form-card-subtitle">Never miss an update</p>
              </div>

              <div className="modern-newsletter-form">
                <div className="input-wrapper">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="modern-newsletter-input"
                  />
                  <button className="modern-newsletter-btn">
                    <span>Subscribe Now</span>
                    <ArrowRightIcon className="btn-arrow-icon" />
                  </button>
                </div>

                <div className="form-features">
                  <div className="feature-item">
                    <BookOpenIcon className="feature-icon" />
                    <span>Weekly insights & tips</span>
                  </div>
                  <div className="feature-item">
                    <TrophyIcon className="feature-icon" />
                    <span>Success stories</span>
                  </div>
                  <div className="feature-item">
                    <LightBulbIcon className="feature-icon" />
                    <span>Expert resources</span>
                  </div>
                </div>

                <p className="privacy-note">
                  <span className="privacy-icon">🔒</span>
                  Your privacy is protected. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
