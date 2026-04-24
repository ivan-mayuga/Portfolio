import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsSectionData } from "../data/portfolioData";

function Projects() {
  const [previewProject, setPreviewProject] = useState(null);

  useEffect(() => {
    if (!previewProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPreviewProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewProject]);

  const closePreview = () => {
    setPreviewProject(null);
  };

  return (
    <section className="projects-section section-anchor" id="projects">
      <div className="projects-container">
        <Reveal delay={20}>
          <SectionTitle
            title={projectsSectionData.title}
            subtitle={projectsSectionData.subtitle}
          />
        </Reveal>

        <div className="projects-grid">
          {projectsSectionData.items.map((project, index) => (
            <Reveal key={project.title} delay={90 + index * 70}>
              <ProjectCard project={project} onPreview={setPreviewProject} />
            </Reveal>
          ))}
        </div>
      </div>

      {previewProject ? (
        <div
          className="project-preview-overlay"
          role="presentation"
          onClick={closePreview}
        >
          <div
            className="project-preview-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-preview-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-preview-close"
              aria-label="Close project preview"
              onClick={closePreview}
            >
              ×
            </button>

            <div className="project-preview-media-frame">
              <img
                src={previewProject.href}
                alt={previewProject.previewAlt || previewProject.imageAlt}
                className="project-preview-media"
              />
            </div>

            <div className="project-preview-copy">
              <h3 id="project-preview-title">{previewProject.title}</h3>
              <p>{previewProject.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Projects;
