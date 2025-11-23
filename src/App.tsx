import { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'work':
        return <Work />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <header className="navbar">
        <div className="navbar-container navbar-glow">
          <div className="navbar-logo" onClick={() => setCurrentPage('home')}>
            <img src="/logo.png" alt="Dispulse" className="logo-image" />
            <span className="logo-text">Dispulse</span>
          </div>

          <nav className="navbar-menu">
            <a onClick={() => setCurrentPage('home')} className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
            <a onClick={() => setCurrentPage('services')} className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}>Services</a>
            <a onClick={() => setCurrentPage('work')} className={`nav-link ${currentPage === 'work' ? 'active' : ''}`}>Work</a>
            <a onClick={() => setCurrentPage('faq')} className={`nav-link ${currentPage === 'faq' ? 'active' : ''}`}>FAQ</a>
            <a onClick={() => setCurrentPage('contact')} className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>

          <button className="btn-cta" onClick={() => setCurrentPage('contact')}>Get in Touch</button>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
