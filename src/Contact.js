import './App.css';
import { useState } from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I Need To Use GoHighLevel To Leverage CloserX.Ai's Capabilities?",
      answer: "No, CloserX.Ai can be integrated with various CRM platforms and works independently. However, GoHighLevel integration provides additional benefits and streamlined workflows."
    },
    {
      question: "Is CloserX.Ai The Best AI Calling Product For Agencies On The Market?",
      answer: "CloserX.Ai is a leading AI calling solution designed specifically for agencies. It offers advanced features, realistic voice interactions, and comprehensive appointment booking capabilities that make it a top choice for agency operations."
    },
    {
      question: "Is There A Standalone White-Label Option Available Without GoHighLevel?",
      answer: "Yes, CloserX.Ai offers standalone white-label options that work independently of GoHighLevel. You can brand the platform as your own and use it with various integrations."
    },
    {
      question: "What Is The Pricing Structure For CloserX.Ai?",
      answer: "CloserX.Ai offers flexible pricing plans starting at $29. Pricing varies based on features, call volumes, and integrations. Contact us for detailed pricing information tailored to your agency's needs."
    },
    {
      question: "Can I Set My Own Resale Prices For The Product?",
      answer: "Yes, as a white-label partner, you have full control over pricing. You can set your own margins on credits and subscriptions, allowing you to maximize profitability while offering competitive rates to your clients."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="e. g. John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="e. g. johndoe@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="(123) - 456 - 789"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Write Your Message Here"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">Send Message</button>
          </form>
        </div>
      </section>
      <section id="faq" className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">FAQ</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      {openIndex === index ? (
                        <line x1="12" y1="12" x2="12" y2="12"/>
                      ) : (
                        <>
                          <line x1="12" y1="8" x2="12" y2="16"/>
                          <line x1="8" y1="12" x2="16" y2="12"/>
                        </>
                      )}
                    </svg>
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

