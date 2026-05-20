import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/">Fixr</Link>
          <p>On-demand mechanic platform with fast roadside support, repairs, and maintenance bookings via our mobile app.</p>
          <p>Available on the App Store and Google Play.</p>
        </div>

        <div className="footer-nav">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><span className="footer-icon" aria-hidden="true">📧</span> kiizaisaacalvin256@gmail.com</p>
          <p><span className="footer-icon" aria-hidden="true">📞</span> +256-789186476</p>
          <Link to="/contact"><span className="footer-icon" aria-hidden="true">💬</span> Contact support</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Fixr. On-demand mechanics platform with app support on Play Store and App Store.</span>
        <span className="social-pill">F</span>
      </div>
    </footer>
  )
}

export default Footer
