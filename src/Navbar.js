import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleHashLink = (e, hash) => {
    e.preventDefault();
    closeMobileMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Close menu when clicking on overlay
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar-container') && !e.target.closest('.navbar-menu') && !e.target.closest('.mobile-menu-overlay')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <span className="logo-text">skyweb</span>
            <span className="logo-x">X</span>
            <span className="logo-ai">.ai</span>
          </Link>
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={isMobileMenuOpen ? 'hamburger open' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><Link to="/offers" onClick={closeMobileMenu}>OFFER</Link></li>
            <li><Link to="/" onClick={closeMobileMenu}>HOME</Link></li>
            <li><a href="#about" onClick={(e) => handleHashLink(e, '#about')}>ABOUT</a></li>
            <li><Link to="/services" onClick={closeMobileMenu}>SERVICES</Link></li>
            <li><Link to="/contact" onClick={closeMobileMenu}>CONTACT</Link></li>
            <li><button className="navbar-button" onClick={closeMobileMenu}>START NOW</button></li>
          </ul>
        </div>
      </nav>
      {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}
    </>
  );
}

export default Navbar;

