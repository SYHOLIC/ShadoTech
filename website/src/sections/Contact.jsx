import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', contactNo: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
});

      const data = await response.json();
      setMessage(data.message);
      setFormData({ name: '', email: '', contactNo: '' }); // Clear form on success
    } catch (error) {
      setMessage('Failed to submit form. Please try again.');
    }
  };

  return (
    <section id="contact">
      <h1>CONTACT US</h1>
      <p className="subtext">
        Ready to start your digital transformation? We’d love to hear about your project and discuss how Shadotech can help. Reach out to us for a consultation:
      </p>

      <div className="contact_container">
        <div className="contact_info">
          <p><span className="icon">📧</span> contact@shadotech.in</p>
          <p><span className="icon">📞</span> +91-8780955372 (available Mon–Fri, 9am–6pm IST)</p>
          <p><span className="icon">📍</span> Plot no-01 Gauthambudh Nagar Colony Titardi, Sec-09, Udaipur, Rajasthan</p>
        </div>

        <form className="contact_form" onSubmit={handleSubmit}>
          <label>
            NAME
            <input
              type="text"
              placeholder="ENTER"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <label>
            EMAIL
            <input
              type="email"
              placeholder="ENTER"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
            />
          </label>
          <label>
            CONTACT NO
            <input
              type="tel"
              placeholder="ENTER"
              name="contactNo"
              required
              onChange={handleChange}
              value={formData.contactNo}
            />
          </label>
          <button type="submit">SUBMIT</button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
