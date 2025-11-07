import { useState } from "react";

const initialState = {
  title: "",
  client: "",
  year: "",
  description: "",
};

const AddProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(formData);
    setFormData(initialState);
  };

  return (
    <form id="add" className="form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Project Title *"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="client"
        placeholder="Client *"
        value={formData.client}
        onChange={handleChange}
        required
      />
      <input
        name="year"
        type="number"
        placeholder="Year"
        value={formData.year}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Short description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
