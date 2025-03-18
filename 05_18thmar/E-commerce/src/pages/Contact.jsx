import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = 'First name is required.';
    if (!formData.lastName) newErrors.lastName = 'Last name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.subject) newErrors.subject = 'Subject is required.';
    if (!formData.message) newErrors.message = 'Message is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Submit the form (e.g., send data to an API)
      console.log('Form submitted:', formData);
      setErrors({});
      alert('Message sent successfully!');
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">We'd Love to Hear From You</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container my-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8 mb-4">
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <h3 className="card-title mb-4">Send Us a Message</h3>
                <form id="contactForm" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <select
                      className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h3 className="card-title mb-4">Contact Information</h3>
                <div className="d-flex mb-3">
                  <i className="bi bi-geo-alt-fill text-primary me-3 fs-4"></i>
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <p className="mb-0">
                      123 E-Commerce Street<br />
                      Business District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="bi bi-telephone-fill text-primary me-3 fs-4"></i>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p className="mb-0">(123) 456-7890</p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i className="bi bi-envelope-fill text-primary me-3 fs-4"></i>
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <p className="mb-0">info@estore.com</p>
                  </div>
                </div>
                <div className="d-flex">
                  <i className="bi bi-clock-fill text-primary me-3 fs-4"></i>
                  <div>
                    <h5 className="mb-1">Business Hours</h5>
                    <p className="mb-0">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title mb-4">Follow Us</h3>
                <div className="d-flex justify-content-around">
                  <a href="#" className="text-primary fs-3"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-primary fs-3"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-primary fs-3"><i className="bi bi-instagram"></i></a>
                  <a href="#" className="text-primary fs-3"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;