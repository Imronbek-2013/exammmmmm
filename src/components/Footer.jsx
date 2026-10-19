import img from '../assets/Logo (1).png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="logo">
              <img src={img} alt="Interno logo" />
              <span className="logo__text">Interno</span>
            </Link>
            <p>It is a long-established fact that a reader will be distracted by the design.</p>
            <div className="site-footer__socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">x</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div>
            <h3 className="site-footer__title">Pages</h3>
            <ol className="site-footer__list">
              <li><span>01</span><Link to="/about">About</Link></li>
              <li><span>02</span><Link to="/projects">Our Projects</Link></li>
              <li><span>03</span><Link to="/team">Our Team</Link></li>
              <li><span>04</span><Link to="/projects">Projects</Link></li>
              <li><span>05</span><Link to="/contact">Contact</Link></li>
              <li><span>06</span><Link to="/services">Services</Link></li>
            </ol>
          </div>

          <div>
            <h3 className="site-footer__title">Contact</h3>
            <div className="site-footer__contact">
              <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
              <p>contact@interno.com</p>
              <p>(123) 456 - 7890</p>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
