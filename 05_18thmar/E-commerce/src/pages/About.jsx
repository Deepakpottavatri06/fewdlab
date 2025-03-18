import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>

      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>About Us</h1>
          <p className="lead">Discover Our Story and Mission</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container my-5">
        {/* Company Overview */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="mb-4">Our Story</h2>
            <p className="lead mb-4">
              Founded in 2020, E-Store has grown from a small startup to a leading e-commerce platform, serving customers worldwide with quality products and exceptional service.
            </p>
            <p className="mb-4">
              Our journey began with a simple mission: to provide customers with a seamless online shopping experience and access to premium products at competitive prices. Today, we continue to innovate and expand our offerings while maintaining our commitment to customer satisfaction.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-people-fill text-primary me-3 fs-1"></i>
                  <div>
                    <h4 className="mb-0">1M+</h4>
                    <p className="mb-0">Happy Customers</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <i className="bi bi-globe text-primary me-3 fs-1"></i>
                  <div>
                    <h4 className="mb-0">50+</h4>
                    <p className="mb-0">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              className="img-fluid rounded-3 shadow"
              alt="Team Meeting"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className="bi bi-bullseye text-primary mb-3 fs-1"></i>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  To provide our customers with the highest quality products and exceptional shopping experience while maintaining competitive prices and outstanding service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className="bi bi-eye text-primary mb-3 fs-1"></i>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                  To become the world's most customer-centric e-commerce platform, known for innovation, quality, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className="bi bi-heart text-primary mb-3 fs-1"></i>
                <h3 className="card-title">Our Values</h3>
                <p className="card-text">
                  Customer Focus, Integrity, Innovation, Quality, and Sustainability drive everything we do at E-Store.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-5">
          <h2 className="mb-4">Meet Our Leadership Team</h2>
          <p className="lead mb-5">
            Dedicated professionals working together to bring you the best shopping experience
          </p>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                  className="card-img-top"
                  alt="CEO"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">John Smith</h5>
                  <p className="text-muted">CEO & Founder</p>
                  <div className="social-links">
                    <a href="#" className="text-primary me-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                  className="card-img-top"
                  alt="COO"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">Sarah Johnson</h5>
                  <p className="text-muted">Chief Operations Officer</p>
                  <div className="social-links">
                    <a href="#" className="text-primary me-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  className="card-img-top"
                  alt="CTO"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">David Chen</h5>
                  <p className="text-muted">Chief Technology Officer</p>
                  <div className="social-links">
                    <a href="#" className="text-primary me-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  className="card-img-top"
                  alt="CMO"
                />
                <div className="card-body p-4">
                  <h5 className="card-title">Emily Brown</h5>
                  <p className="text-muted">Chief Marketing Officer</p>
                  <div className="social-links">
                    <a href="#" className="text-primary me-2">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="text-primary">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-5">
          <h2 className="mb-4">What Our Customers Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="bi bi-quote text-primary fs-1 mb-3"></i>
                  <p className="card-text mb-4">
                    "Outstanding service and quality products. E-Store has been my go-to online shop for years. Their customer support is exceptional!"
                  </p>
                  <h5 className="card-title mb-1">Michael Wilson</h5>
                  <p className="text-muted">Loyal Customer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="bi bi-quote text-primary fs-1 mb-3"></i>
                  <p className="card-text mb-4">
                    "The best online shopping experience I've had. Fast shipping, great prices, and amazing product selection. Highly recommended!"
                  </p>
                  <h5 className="card-title mb-1">Lisa Anderson</h5>
                  <p className="text-muted">Happy Shopper</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <i className="bi bi-quote text-primary fs-1 mb-3"></i>
                  <p className="card-text mb-4">
                    "E-Store has transformed how I shop online. Their website is user-friendly, and the products always exceed my expectations."
                  </p>
                  <h5 className="card-title mb-1">Robert Martinez</h5>
                  <p className="text-muted">Regular Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
};

export default About;