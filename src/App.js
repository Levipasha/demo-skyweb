import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import Services from './Services';
import Offers from './Offers';

function AppointmentSection() {
  return (
    <section id="appointment" className="appointment-section">
      <div className="appointment-container">
        <h2 className="appointment-heading">
          24/7 Appointment setting Automated With{' '}
          <span className="appointment-highlight">the smoothest conversational AI</span>
        </h2>
        <div className="appointment-features-grid">
          <div className="appointment-feature-box">
            <h3 className="appointment-feature-title">Unlimited AI Voice Agents</h3>
            <p className="appointment-feature-description">
              Scale operations without limits. Easily oversee and control numerous client accounts from a single, centralized dashboard.
            </p>
          </div>
          <div className="appointment-feature-box">
            <h3 className="appointment-feature-title">Unlimited Whitelabel Accounts</h3>
            <p className="appointment-feature-description">
              Rebrand the entire platform with your agency's logo, colors, and domain for a seamless client experience.
            </p>
          </div>
          <div className="appointment-feature-box">
            <h3 className="appointment-feature-title">Automated Appointment Booking</h3>
            <p className="appointment-feature-description">
              Streamline scheduling with AI-powered booking capabilities.
            </p>
          </div>
          <div className="appointment-feature-box">
            <h3 className="appointment-feature-title">Call Recording And Transcription</h3>
            <p className="appointment-feature-description">
              Capture and convert every conversation for easy reference.
            </p>
          </div>
          <div className="appointment-feature-box">
            <h3 className="appointment-feature-title">Superior Noise Reduction In Calls</h3>
            <p className="appointment-feature-description">
              Ensure crystal-clear communication with advanced audio processing.
            </p>
          </div>
          <div className="appointment-feature-box">
            <h3 className="appointment-feature-title">Train Your AI Agent In 10 Seconds</h3>
            <p className="appointment-feature-description">
              Quickly customize AI behavior using existing call recordings or a pre-built script.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
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
  );
}

function OurApproachSection() {
  return (
    <section id="our-approach" className="our-approach-section">
      <div className="our-approach-container">
        <h2 className="our-approach-heading">OUR APPROACH</h2>
        <div className="approach-ovals-container">
          <div className="approach-oval approach-oval-a">
            <div className="approach-oval-label">A</div>
            <h3 className="approach-oval-title">SELL</h3>
            <div className="approach-oval-line"></div>
            <div className="approach-oval-dot"></div>
            <p className="approach-oval-description">
              Sell It Like A Cup Of Coffee On Monday Morning. Offer What Others Can't The Difference That Gets The Deal
            </p>
          </div>
          <div className="approach-oval approach-oval-b">
            <div className="approach-oval-label">B</div>
            <h3 className="approach-oval-title">PROFIT</h3>
            <div className="approach-oval-line"></div>
            <div className="approach-oval-dot"></div>
            <p className="approach-oval-description">
              No staff to manage, no complex infrastructure to maintain. Just pure, scalable profit potential. Watch your bottom line soar while your operational costs stay grounded.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgencyTextSection() {
  return (
    <section className="agency-text-section">
      <div className="background-text">AI AGENCY AI</div>
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
          <span>AI AGENCY</span><span>AI AGENCY</span>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        <h2 className="clients-heading">10x The Number Of Clients</h2>
        <div className="clients-boxes">
          <div className="feature-box">
            <div className="feature-icon feature-icon-1">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3A2674" strokeWidth="2">
                <circle cx="12" cy="8" r="3"/>
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                <path d="M18 21v-2a4 4 0 0 0-4-4h-2"/>
                <circle cx="19" cy="8" r="3"/>
              </svg>
            </div>
            <h3 className="feature-title">Whitelabel</h3>
            <p className="feature-description">
              Brand the entire platform as your own. Create an army of AI callers to work 24/7, 365 days a year
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon feature-icon-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3A2674" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 9h6v6H9z"/>
              </svg>
            </div>
            <h3 className="feature-title">Plug & Play</h3>
            <p className="feature-description">
              Access to CloserX.ai Skool Community, Plug & Play Funnel Templates + Proven & Tested Ads
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon feature-icon-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3A2674" strokeWidth="2">
                <rect x="3" y="4" width="18" height="14" rx="2"/>
                <path d="M7 8h10M7 12h10M7 16h6"/>
              </svg>
            </div>
            <h3 className="feature-title">Sell</h3>
            <p className="feature-description">
              Launch your AI agency and sell it for as much margin as you want both on credits and subscriptions.
            </p>
          </div>
          <div className="feature-box">
            <div className="feature-icon feature-icon-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3A2674" strokeWidth="2">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 8v8M9 11l3-3 3 3"/>
              </svg>
            </div>
            <h3 className="feature-title">Scale to $30k/mo</h3>
            <p className="feature-description">
              Our agency partners have reported an average of extra $10-15K MRR within the first 2 months of selling AI calling
            </p>
          </div>
        </div>
        <div className="pricing-text">
          <span className="start-at">START AT</span>
          <span className="price-outlined">$29</span>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Closerx Completely Transformed Our Agency. We Went From Struggling To Differentiate Ourselves To Landing $20k/Month Clients With Ease.",
      author: "DOMINICK",
      title: "AGENCY OWNER"
    },
    {
      quote: "The AI Voice Agents Have Been A Game-Changer. Our Appointment Booking Rate Increased By 300% In Just Two Months.",
      author: "SARAH",
      title: "MARKETING DIRECTOR"
    },
    {
      quote: "Best Investment We've Made. The Whitelabel Feature Allowed Us To Scale Our Agency Without Adding Extra Staff.",
      author: "MICHAEL",
      title: "CEO & FOUNDER"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="statistics-section">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Active Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">AI Agents Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15000+</div>
            <div className="stat-label">Appointments Booked</div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="quote-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
            </svg>
          </div>
          <p className="testimonial-quote">
            {testimonials[currentTestimonial].quote}
          </p>
          <div className="testimonial-author">
            <div className="author-name">{testimonials[currentTestimonial].author}</div>
            <div className="author-title">{testimonials[currentTestimonial].title}</div>
          </div>
          <div className="testimonial-nav">
            <button className="nav-arrow" onClick={prevTestimonial} aria-label="Previous testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="nav-arrow" onClick={nextTestimonial} aria-label="Next testimonial">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-start-text">START AT</div>
        <div className="cta-price">$29</div>
        <button className="cta-button">
          START NOW
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </button>
      </div>
    </section>
  );
}


function FAQSection() {
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
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-left">
            <div className="footer-logo-container">
              <h3 className="footer-logo">skywebdemo</h3>
            </div>
            <div className="footer-social-container">
              <div className="footer-social-icons">
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Social Media">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Website">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Add">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="16"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </svg>
                </a>
              </div>
              <button className="footer-contact-btn">Contact Us</button>
            </div>
          </div>
          <div className="footer-section footer-middle">
            <h4 className="footer-title">MAIN</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#affiliate">Become An Affiliate</a></li>
            </ul>
          </div>
          <div className="footer-section footer-right">
            <h4 className="footer-title">PAGES</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="background-text">skywebdemo</div>
        <div className="scrolling-text-container">
          <div className="scrolling-text">
            <span>AGENCY</span><span>AI AGENCY</span>
            <span>AGENCY</span><span>AI AGENCY</span>
            <span>AGENCY</span><span>AI AGENCY</span>
            <span>AGENCY</span><span>AI AGENCY</span>
            <span>AGENCY</span><span>AI AGENCY</span>
            <span>AGENCY</span><span>AI AGENCY</span>
          </div>
        </div>
        <spline-viewer
          url="https://prod.spline.design/XUHxlqHYQpHc0DM3/scene.splinecode"
          className="spline-container"
          loading="lazy"
        ></spline-viewer>
      </div>
      <ServicesSection />
      <OurApproachSection />
      <AgencyTextSection />
      <ClientsSection />
      <AppointmentSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    // Disable context menu for better performance
    const handleContextMenu = (e) => e.preventDefault();
    window.addEventListener('contextmenu', handleContextMenu);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
