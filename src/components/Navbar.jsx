import { useEffect, useState } from "react";

function Navbar({ links, activeSection, isScrolled, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (sectionId) => {
    onNavigate?.(sectionId);
    closeMenu();
  };

  const renderLinks = (className = "") =>
    links.map((link) => {
      const isActive = activeSection === link.id;

      return (
        <a
          key={link.id}
          href={link.href}
          className={`navbar-link${isActive ? " is-active" : ""} ${className}`.trim()}
          onClick={() => handleLinkClick(link.id)}
          aria-current={isActive ? "page" : undefined}
        >
          {link.label}
        </a>
      );
    });

  return (
    <header className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <a
          href="#home"
          className="navbar-brand"
          onClick={() => handleLinkClick("home")}
        >
          <span className="brand-circles" aria-hidden="true">
            <span className="circle circle-dark"></span>
            <span className="circle circle-black"></span>
          </span>
          <span className="brand-name">IVAN</span>
        </a>

        <div className="navbar-links navbar-links--desktop">{renderLinks()}</div>

        <button
          type="button"
          className={`navbar-toggle${isMenuOpen ? " is-active" : ""}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="mobile-navigation"
          className={`navbar-mobile-panel${isMenuOpen ? " is-open" : ""}`}
        >
          {renderLinks("navbar-link--mobile")}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
