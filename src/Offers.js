import './App.css';
import { useState } from 'react';

function Offers() {
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

  const testimonials = [
    {
      name: "Elena Adams",
      location: "USA",
      earningsShort: "$12.8K/mo",
      earningsFull: "$12 847/month",
      initials: "EA"
    },
    {
      name: "Diego Jimenez",
      location: "USA",
      earningsShort: "$8.6K/mo",
      earningsFull: "$8 654/month",
      initials: "DJ"
    },
    {
      name: "Abdulaziz Aden",
      location: "UK",
      earningsShort: "$15.9K/mo",
      earningsFull: "$15 923/month",
      initials: "AA"
    },
    {
      name: "Ayman Shalaby",
      location: "USA",
      earningsShort: "$9.8K/mo",
      earningsFull: "$9 876/month",
      initials: "AS"
    }
  ];

  const steps = [
    {
      number: 1,
      icon: "🚀",
      title: "Whitelabel CloserX AI",
      description: "Get instant access to your complete agency dashboard"
    },
    {
      number: 2,
      icon: "🎨",
      title: "Add Your Brand & Domain",
      description: "Upload logo, customize colors, connect domain in 5 minutes"
    },
    {
      number: 3,
      icon: "💰",
      title: "Set Your Pricing & Packages",
      description: "Create tiered plans, set rebilling rates, enable auto-charging"
    },
    {
      number: 4,
      icon: "📄",
      title: "Launch with Proven Templates",
      description: "Use our $47M-tested ads & scripts for your niche"
    },
    {
      number: 5,
      icon: "🎯",
      title: "Scale & Automate Revenue",
      description: "Watch MRR compound while AI handles everything 24/7"
    }
  ];

  return (
    <>
      {/* Section 1: Hero Promotion */}
      <section className="offers-hero-section">
        <div className="offers-hero-container">
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE NOW • 2,847 Agencies Using This Today
          </div>
          <h1 className="offers-hero-title">
            Install This <span className="highlight-blue">Whitelabel</span> AI <span className="highlight-purple">Calling Platform</span> & Add $300-$500/Month Per Client
          </h1>
          <p className="offers-hero-subtitle">
            Close Your First Client in the Next 72 Hours Using Our Plug-and-Play AI Calling Templates & Sales Frameworks That Already Generated $47M+ for Agencies
          </p>
          <button className="offers-cta-button">
            WHITELABEL NOW! GET INSTANT ACCESS →
          </button>
          <div className="limited-time-badge">
            <span className="flame-icon">🔥</span>
            Limited Time: $29/mo
          </div>
          <div className="offers-features-grid">
            <div className="offers-feature-box">
              <div className="feature-check-icon">✓</div>
              <span>Unlimited AI Voice Agents</span>
            </div>
            <div className="offers-feature-box">
              <div className="feature-check-icon">✓</div>
              <span>Complete Whitelabel Solution</span>
            </div>
            <div className="offers-feature-box">
              <div className="feature-check-icon">✓</div>
              <span>56 Ultra-Realistic Voices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 5-Step Process */}
      <section className="offers-process-section">
        <div className="offers-process-container">
          <div className="process-badge">
            <span className="lightning-icon">⚡</span>
            SIMPLE 5-STEP PROCESS
          </div>
          <h2 className="offers-process-title">
            How to Launch Your <span className="highlight-blue-gradient">Profitable AI</span> <span className="highlight-purple-gradient">Agency</span>
          </h2>
          <p className="offers-process-subtitle">
            From zero to profitable in less than 72 hours — no coding, no tech skills needed
          </p>
          <div className="steps-container">
            <div className="steps-connector"></div>
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-circle">
                  <span className="step-number">{step.number}</span>
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Real Agency Results */}
      <section className="offers-results-section">
        <div className="offers-results-container">
          <div className="results-badge">
            <span className="star-icon">⭐</span>
            REAL AGENCY RESULTS
          </div>
          <h2 className="offers-results-title">
            Every Single Agency Below Made <span className="highlight-yellow">$5K+</span> Monthly Within 90 Days of Starting
          </h2>
          <p className="offers-results-description">
            Watch how 2,847 agency owners transformed their business with CloserX's whitelabel AI calling platform — real stories, real revenue, real results
          </p>
          <div className="results-stats">
            <div className="stat-item">
              <div className="stat-number">$9,847</div>
              <div className="stat-label">AVERAGE MONTHLY REVENUE</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">47 Days</div>
              <div className="stat-label">AVG TIME TO $5K MRR</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">92%</div>
              <div className="stat-label">SUCCESS RATE</div>
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-video-thumbnail">
                  <div className="play-button-overlay">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="earnings-badge">{testimonial.earningsShort}</div>
                  <div className="avatar-circle">{testimonial.initials}</div>
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-location">{testimonial.location}</p>
                  <p className="testimonial-earnings">{testimonial.earningsFull}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

export default Offers;

