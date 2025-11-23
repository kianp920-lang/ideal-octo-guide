function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <header className="navbar">
        <div className="navbar-container navbar-glow">
          <div className="navbar-logo">
            <div className="logo-icon">D</div>
            <span className="logo-text">Dispulse</span>
          </div>

          <nav className="navbar-menu">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Work</a>
            <a href="#" className="nav-link">FAQ</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>

          <button className="btn-cta">Get in Touch</button>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <spline-viewer url="https://prod.spline.design/hJKMelfycWC4hWys/scene.splinecode"></spline-viewer>
      </div>
    </div>
  );
}

export default App;
