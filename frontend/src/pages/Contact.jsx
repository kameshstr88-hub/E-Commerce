import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* 🔥 HEADER */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Get in touch with us!</p>
      </div>

      {/* 🔥 MAIN SECTION */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            <strong>📍 Address:</strong><br />
            ShopZone Pvt Ltd,<br />
            Salem, Tamil Nadu, India
          </p>

          <p>
            <strong>📞 Phone:</strong><br />
            <a href="tel:+919876543210">+91 98765 43210</a>
          </p>

          <p>
            <strong>📧 Email:</strong><br />
            <a href="mailto:support@shopzone.com">
              support@shopzone.com
            </a>
          </p>

          <div className="contact-socials">
            <a href="https://github.com/kameshstr88-hub" target="_blank" rel="noreferrer">
              🌐 GitHub
            </a>

            <a href="https://www.instagram.com/kamess_25/" target="_blank" rel="noreferrer">
              📸 Instagram
            </a>


          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <h2>Send Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>

      {/* 🔥 MAP SECTION */}
      <div className="contact-map">
        <h2>Our Location</h2>

        <iframe
          src="https://www.google.com/maps?q=Tamil%20Nadu%20India&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;