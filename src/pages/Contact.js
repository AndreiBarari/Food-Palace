import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contactLeft"></div>
      <div className="contactRight">
        <h1>Contact Us</h1>
        <form id="contactForm">
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" placeholder="Enter full name" />
          <label htmlFor="email">Email adddress</label>
          <input type="email" name="email" placeholder="Enter email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Your message to us"
            required
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
