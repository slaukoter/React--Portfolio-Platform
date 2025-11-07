import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <p className="empty">
        No projects found. Try a different search or add a new one.
      </p>
    );
  }

  return (
    <div id="projects" className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
