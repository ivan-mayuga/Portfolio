import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { contactSectionData, socialLinks } from "../data/portfolioData";

function Contact() {
  return (
    <section className="contact-section section-anchor" id="contact">
      <Reveal className="contact-container">
        <h2 className="contact-title">{contactSectionData.title}</h2>
        <div className="contact-line"></div>

        <div className="contact-details">
          {contactSectionData.details.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <SocialLinks links={socialLinks} />
      </Reveal>
    </section>
  );
}

export default Contact;
