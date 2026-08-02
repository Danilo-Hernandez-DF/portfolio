import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="project-detail">
        <div className="not-found">
          <h2>Project Not Found</h2>
          <Link to="/" className="back-link">← Back to Portfolio</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <Link to="/" className="back-link">← Back to Portfolio</Link>
      
      <div className="project-detail-content">
        <img 
          src={project.image} 
          alt={project.title} 
          className="detail-image"
        />
        
        <div className="detail-info">
          <h1 className="detail-title">{project.title}</h1>
          
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          
          <p className="detail-description">{project.fullDescription}</p>
          
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} className="link-button github" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} className="link-button live" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
