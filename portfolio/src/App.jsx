import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Modern Portfolio Platform",
      client: "Flatiron School Project",
      year: 2025,
      description:
        "A responsive React single-page application for showcasing creative projects with dynamic search and filtering.",
    },
    {
      id: 2,
      title: "Restaurant Tip Tracker",
      client: "Personal Project",
      year: 2025,
      description:
        "A React + JSON Server app for recording and calculating restaurant tips. Includes real-time updates and data persistence.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(term) ||
      project.client.toLowerCase().includes(term) ||
      (project.description || "").toLowerCase().includes(term)
    );
  });

  const handleAddProject = (newProject) => {
    const { title, client, year, description } = newProject;
    if (!title.trim() || !client.trim()) return;

    setProjects((prev) => [
      {
        id: Date.now(),
        title: title.trim(),
        client: client.trim(),
        year: year || "",
        description: description || "",
      },
      ...prev,
    ]);
  };

  return (
    <div className="app">
      <Header />

      <main className="main">
        <section className="controls">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </section>

        <section className="projects-section">
          <h2 className="section-title">Selected Work</h2>
          <ProjectList projects={filteredProjects} />
        </section>

        <section className="form-section">
          <h2 className="section-title">Add New Project</h2>
          <AddProjectForm onAddProject={handleAddProject} />
        </section>
      </main>

      <footer className="footer">
        <p>{new Date().getFullYear()} Portfolio Platform</p>
      </footer>
    </div>
  );
}

export default App;
