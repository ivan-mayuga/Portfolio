function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="heading-line"></div>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

export default SectionTitle;
