function ProjectCard({ project, onPreview }) {
  if (project.previewInModal) {
    return (
      <article className="project-card">
        <img src={project.image} alt={project.imageAlt} className="project-image" />

        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          <div className="project-tech">
            {project.tech.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="btn-view-project"
            onClick={() => onPreview?.(project)}
          >
            View Project
          </button>
        </div>
      </article>
    );
  }

  const linkProps = project.external
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <article className="project-card">
      <img src={project.image} alt={project.imageAlt} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        <a href={project.href} className="btn-view-project" {...linkProps}>
          View Project
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
