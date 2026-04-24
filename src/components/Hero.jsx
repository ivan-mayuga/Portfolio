import { heroData } from "../data/portfolioData";

function Hero() {
  return (
    <section className="hero-section section-anchor" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="headline-container">
            <div className="glass-overlay overlay-1" aria-hidden="true"></div>

            <div className="headline-row row-1">
              <span className="main-text">{heroData.headlineTop}</span>
              <div className="badge-group">
                <span className="badge badge-outline">{heroData.year}</span>
                <span className="circle-outline" aria-hidden="true"></span>
              </div>
            </div>

            <div className="headline-row row-2">
              <div className="badge-group">
                <span className="solid-dot" aria-hidden="true"></span>
                <span className="badge badge-signature">{heroData.signature}</span>
              </div>
              <span className="main-text">{heroData.headlineBottom}</span>
            </div>

            <div className="glass-overlay overlay-2" aria-hidden="true"></div>
          </div>

          <p className="subtitle">{heroData.subtitle}</p>

          <a href={heroData.resumeHref} download className="btn-resume">
            Download Resume
          </a>
        </div>

        <div className="bottom-info">
          {heroData.quickLinks.map((item) => (
            <a key={item.href} href={item.href} className="contact-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
