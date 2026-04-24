function SocialLinks({ links, className = "", ariaLabel = "Social links" }) {
  return (
    <nav className={`social-pill ${className}`.trim()} aria-label={ariaLabel}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="social-link"
          target="_blank"
          rel="noreferrer"
          aria-label={link.name}
        >
          <img src={link.icon} alt={link.name} className="social-icon" />
        </a>
      ))}
    </nav>
  );
}

export default SocialLinks;
