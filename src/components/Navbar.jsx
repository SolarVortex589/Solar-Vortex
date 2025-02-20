function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="logo-link">
            <div className="logo" />
            <span className="logo-text">SolarVortex</span>
          </a>
        </div>
        <div className="navbar-right">
          <a href="/blog" className="nav-button">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
