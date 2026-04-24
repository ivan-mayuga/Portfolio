function ContactItem({ icon, title, href, label, className = "", linkClassName = "" }) {
  const isExternal = href.startsWith("http");
  const linkProps = isExternal
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <div className={`contact-item ${className}`.trim()}>
      <img src={icon} alt={title} className="social-icon" />
      <a href={href} className={`contact-item-link ${linkClassName}`.trim()} {...linkProps}>
        {label}
      </a>
    </div>
  );
}

export default ContactItem;
