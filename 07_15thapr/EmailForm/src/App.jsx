import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export default function App() {
  const formConfig = [
    { id: 1, type: "text", name: "firstName", placeholder: "First Name" },
    { id: 2, type: "text", name: "lastName", placeholder: "Last Name" },
    { id: 3, type: "email", name: "email", placeholder: "Email" },
    { id: 4, type: "textarea", name: "message", placeholder: "Message" },
  ];

  function InputField({ type, name, placeholder, value, onChange }) {
    if (type === "textarea") {
      return (
        <textarea
          className="form-control"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          rows={4}
        />
      );
    }
    return (
      <input
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    );
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = "Thank you for your message. We will get back to you soon.";
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
    const response = await axios.post('https://sendmail-gamma.vercel.app/api/send-email', {
      user: "deepakpottavatri@gmail.com",
      password:"<app password>",
      email: formData.email,
      subject: "Contact Form Submission",
      text:text
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit}>
          {formConfig.map((field) => (
            <div className="mb-3" key={field.id}>
              <label className="form-label">{field.placeholder}</label>
              <InputField
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button className="btn btn-primary w-100" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
