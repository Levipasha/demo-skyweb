import './App.css';
import { useEffect } from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>skywebdemo</h2>
        </div>
        <ul className="navbar-menu">
          <li><a href="#offer">OFFER</a></li>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><button className="navbar-button">START NOW</button></li>
        </ul>
      </div>
    </nav>
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
        <div className="approach-boxes">
          <div className="content-box">
            <h3 className="content-title">UNIQUE AGENCY OFFERING</h3>
            <p className="content-description">
              In a sea of similar pitches, be the agency with a twist. Offer prospects something they haven't seen or heard – an AI sales experience that feels so real; they'll have to pinch themselves!
            </p>
          </div>
          <div className="content-box">
            <h3 className="content-title">SELL</h3>
            <p className="content-description">
              Sell It Like A Cup Of Coffee On Monday Morning. Offer What Others Can't The Difference That Gets The Deal
            </p>
          </div>
          <div className="content-box">
            <h3 className="content-title">PROFIT</h3>
            <p className="content-description">
              No staff to manage, no complex infrastructure to maintain. Just pure, scalable profit potential. Watch your bottom line soar while your operational costs stay grounded.
            </p>
          </div>
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
            <div className="feature-icon" style={{background: '#FFB6C1'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
            <div className="feature-icon" style={{background: '#98FB98'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
            <div className="feature-icon" style={{background: '#87CEEB'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
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
            <div className="feature-icon" style={{background: '#FFD700'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">skywebdemo</h3>
            <p className="footer-description">
              Transform your agency with AI-powered solutions that work 24/7.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">AI Calling</a></li>
              <li><a href="#services">Appointment Booking</a></li>
              <li><a href="#services">Whitelabel</a></li>
              <li><a href="#services">Plug & Play</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>Email: info@skywebdemo.com</li>
              <li>Support: support@skywebdemo.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} skywebdemo. All rights reserved.</p>
        </div>
      </div>
    </footer>
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
    <div className="App">
      <Navbar />
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
      <ClientsSection />
      <Footer />
    </div>
  );
}

export default App;
