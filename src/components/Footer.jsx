import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { footerData, socialLinks } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer-section">
      <Reveal className="footer-container">
        <div className="footer-left">
          <h2 className="footer-name">{footerData.name}</h2>
          <p className="footer-tagline">{footerData.tagline}</p>
          <SocialLinks links={socialLinks} className="footer-socials" />
        </div>

        <div className="footer-right">
          <h3 className="footer-heading">Contact</h3>

          {footerData.contact.map((item) => (
            <div key={item.label} className="footer-contact-item">
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="contact-value">
                  {item.value}
                </a>
              ) : (
                <span className="contact-value">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;
