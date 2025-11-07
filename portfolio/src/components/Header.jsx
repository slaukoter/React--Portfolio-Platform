const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="logo">Studio Portfolio</h1>
        <p className="tagline">A simple showcase of recent creative work.</p>
      </div>
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#add">Add Project</a>
      </nav>
    </header>
  );
};

export default Header;
