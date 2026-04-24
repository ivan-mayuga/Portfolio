function SkillCard({ icon, name }) {
  return (
    <div className="tech-card">
      <img src={icon} alt={`${name} logo`} />
      <span>{name}</span>
    </div>
  );
}

export default SkillCard;
