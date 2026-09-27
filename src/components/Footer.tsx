import { Link } from 'react-router-dom';
import { BookingButton } from './BookingButton';
import { footerLinkGroups } from '@/data/siteData';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link to="/" className="brand">
          <span>THE GOLDEN NUMERALIST</span>
          <small>BY NAMRATTAA LAL</small>
        </Link>
        <p>Traditional numerology for modern reflection.</p>
        <BookingButton label="Book a session" variant="outline" />
      </div>
      <div className="footer-links">
        {footerLinkGroups.map(([heading, links]) => (
          <div key={heading}>
            <span className="eyebrow">{heading}</span>
            {links.map((link) => (
              <Link key={link} to={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 The Golden Numeralist</span>
        <span>Privacy · Terms · Disclaimer</span>
      </div>
    </footer>
  );
}
