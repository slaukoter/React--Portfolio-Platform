const ProjectCard = ({ project }) => {
  const { title, client, year, description } = project;

  return (
    <article className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-meta">
        {client} {year && <>• {year}</>}
      </p>
      {description && <p className="project-description">{description}</p>}
    </article>
  );
};

export default ProjectCard;
