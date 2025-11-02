import './App.css';
import { useState } from 'react';

function Services() {
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
      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-left">
            <div className="content-box">
              <h3 className="content-title">AI CALLING</h3>
              <p className="content-description">
                The #1 SaaS Product Of 2024 Every Agency Is Looking For!
              </p>
            </div>
            <div className="content-box">
              <h3 className="content-title">PLUG-AND-PLAY TEMPLATES AND COMMUNITY SUPPORT</h3>
              <p className="content-description">
                Maximize your client's appointment bookings with our AI-powered, ultra-realistic voice calling service. working 24/7 to keep their calendars fully booked.
              </p>
            </div>
          </div>
          <div className="services-right">
            <h2 className="services-heading">SERVICES</h2>
            <div className="content-box">
              <h3 className="content-title">APPOINTMENT BOOKING</h3>
              <p className="content-description">
                Our AI-powered calling books appointments directly into Google and CRM calendars 24/7, keeping your client's schedule full and your business growing.
              </p>
            </div>
            <div className="content-box">
              <h3 className="content-title">LAUNCH YOUR AGENCY</h3>
              <p className="content-description">
                Launch Your Own AI Calling Agency In 8 mins Get Your First Client Using Our Plug-and-Play Templates in the Next 24 Hours...
              </p>
            </div>
          </div>
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

export default Services;

