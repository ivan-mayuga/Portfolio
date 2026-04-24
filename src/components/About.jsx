import Reveal from "./Reveal";
import ContactItem from "./ContactItem";
import { aboutData } from "../data/portfolioData";

function About() {
  return (
    <section className="about-section section-anchor" id="about">
      <Reveal className="navbar-container" delay={20}>
        <div className="navbar-inner">
          <div className="nav-brand">
            <div className="brand-circles" aria-hidden="true">
              <span className="circle circle-dark"></span>
              <span className="circle circle-black"></span>
            </div>
            <h1 className="brand-name">IVAN</h1>
          </div>

          <div className="about-header-content" aria-hidden="true">
            <span className="about-header-label">{aboutData.headerLabel}</span>
          </div>
        </div>
      </Reveal>

      <div className="grid-column col-1">
        <Reveal className="card profile-card" delay={80}>
          <img
            src={aboutData.profileImage}
            alt="John Ivan Mayuga portrait"
            className="profile-img"
          />
          <div className="name-overlay">{aboutData.profileName}</div>
          <div className="tag-container">
            {aboutData.profileTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="card about-card" delay={140}>
          <h2>ABOUT ME</h2>
          <p>
            I am <strong>{aboutData.about.name}</strong>, a{" "}
            <strong>{aboutData.about.age}-year-old</strong>{" "}
            <strong>{aboutData.about.roles}</strong> currently in my first year of
            pursuing a <strong>{aboutData.about.course}</strong> at{" "}
            <strong>{aboutData.about.school}</strong>.
            <br />
            <br />
            Having transitioned from a solid foundation in{" "}
            <strong>{aboutData.about.track}</strong> in{" "}
            {aboutData.about.transitionYear}, {aboutData.about.summary}
          </p>
        </Reveal>
      </div>

      <div className="grid-column col-2">
        <Reveal className="card education-philosophy-card" delay={180}>
          <div className="education-section">
            <h2>EDUCATION</h2>
            {aboutData.education.map((item) => (
              <div key={`${item.year}-${item.degree}`} className="edu-entry">
                <span className="year-pill">{item.year}</span>
                <p className="school-name">{item.school}</p>
                <p className="degree-name">{item.degree}</p>
              </div>
            ))}
          </div>

          <div className="philosophy-section">
            <h2>
              DESIGN <br />
              PHILOSOPHY
            </h2>
            <p className="philosophy-text">{aboutData.philosophy}</p>
          </div>
        </Reveal>
      </div>

      <div className="grid-column col-3">
        <Reveal className="card software-skills-combined-card" delay={240}>
          <div className="software-section">
            <h2>SOFTWARE</h2>
            <div className="software-grid">
              {aboutData.software.map((tool) => (
                <div
                  key={tool.name}
                  className="software-item"
                  style={{ "--progress-width": `${tool.level}%` }}
                >
                  <img src={tool.icon} alt={tool.name} className="software-icon" />
                  <div className="software-info">
                    <span className="software-name">{tool.name}</span>
                    <div className="progress-bar-container">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="decorative-line"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-skills-section">
            <h2>SOFT SKILLS</h2>
            <div className="skills-pill-container">
              {aboutData.softSkills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid-column contact-col">
        <Reveal className="card contact-card" delay={300}>
          <h2>CONTACT</h2>

          <div className="contact-info-wrapper">
            {aboutData.contactColumns.map((column, index) => (
              <div key={`about-contact-column-${index}`} className="contact-list">
                {column.map((item) => (
                  <ContactItem
                    key={item.href}
                    icon={item.icon}
                    title={item.name}
                    href={item.href}
                    label={item.label}
                  />
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
