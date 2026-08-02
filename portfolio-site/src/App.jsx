import { Link } from 'react-router-dom'
import { projects } from './data/projects'
import mail_icon from './assets/mail_icon.png'
import github_icon from './assets/github_icon.svg'
import linkedin_icon from './assets/linkedin_icon.png'
import phone_icon from './assets/phone_icon.png'

import './App.css'

function App() {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('+506 84601419');
        } catch (error) {
            console.error('Failed to copy phone number:', error);
        }
    };
    
  return (
    <div className="app">
      <header className="header">
        <div className="profile-section">
          <div className="profile-info">
            <h1 className="profile-name">Danilo Hernandez</h1>
            <p className="profile-title">Full Stack Developer</p>
            <p className="profile-description">
              Passionate about building fun and functional software. <br />
              Simplifying difficult tasks by creating easy to use applications and games.
            </p>
          </div>
          <div className="contact-links">
              <a href="#" onClick={() => {
                  handleCopy();
                  const tooltip = document.createElement('div');
                  tooltip.textContent = 'Copied!';
                  tooltip.classList.add('tooltip');
                  tooltip.style.position = 'fixed';
                  tooltip.style.top = '10px';
                  tooltip.style.left = '50%';
                  tooltip.style.transform = 'translateX(-50%)';
                  tooltip.style.zIndex = '9999';
                  document.body.appendChild(tooltip);
                  setTimeout(() => {
                      document.body.removeChild(tooltip);
                  }, 1000);
              }} className="contact-link">
                  <span className="contact-icon"><img src={phone_icon} alt="phone"/></span>
                  +506 84601419
              </a>
            <a href="mailto:danilo.hdf04@gmail.com" className="contact-link">
              <span className="contact-icon"><img src={mail_icon} alt="mail"/></span>
              danilo.hdf04@gmail.com
            </a>
            <a href="https://github.com/Danilo-Hernandez-DF/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon"><img src={github_icon} alt="github"/></span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/danilo-hernandez-893a5b23b" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-icon"><img src={linkedin_icon} alt="linkedin"/></span>
              LinkedIn
            </a>
          </div>
        </div>
      </header>
      
      <main className="main">
        <section className="projects-section">
          <h2>Project Highlights</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <Link key={project.id} to={`/project/${project.id}`} className="project-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                  <span className="project-link">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
