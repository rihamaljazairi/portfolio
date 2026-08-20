/**
 * Signal & Structure: reusable case-study panel with an honest visual stage, tags, links, and optional project evidence.
 */
import { ArrowUpRight, Check, Github, MonitorPlay } from "lucide-react";

export default function ProjectCard({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  tech = [],
  features = [],
  github,
  demo,
  status,
  category,
  comingSoon = false,
}) {
  return (
    <article className={`project-card ${comingSoon ? "coming-soon" : ""} reveal`}>
      <div className="project-visual-stage">
        <img src={image} alt={imageAlt} loading="lazy" />
        <div className="project-stage-overlay" aria-hidden="true" />
        <div className="project-stage-topline"><span>{category}</span><span>{status}</span></div>
        <div className="project-stage-index">/ {comingSoon ? "02" : "01"}</div>
        {!comingSoon && <div className="project-system-labels" aria-hidden="true"><span>React admin</span><span>Flutter mobile</span><span>Flask API</span><span>Firebase</span></div>}
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <div>
            <p className="project-subtitle">{subtitle}</p>
            <h3>{title}</h3>
          </div>
          {comingSoon && <span className="coming-label">Coming Soon</span>}
        </div>
        <p className="project-description">{description}</p>
        {tech.length > 0 && (
          <div className="technology-tags" aria-label={`${title} technologies`}>
            {tech.map((item) => <span key={item}>{item}</span>)}
          </div>
        )}
        {features.length > 0 && (
          <div className="project-features">
            <p>Project capabilities</p>
            <ul>
              {features.map((feature) => <li key={feature}><Check size={14} aria-hidden="true" />{feature}</li>)}
            </ul>
          </div>
        )}
        {!comingSoon && (
          <div className="project-actions">
            <a className="project-link primary" href={github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> View on GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
            <a className="project-link" href={demo}><MonitorPlay size={16} aria-hidden="true" /> Live Demo <span className="link-note">Placeholder</span></a>
          </div>
        )}
      </div>
    </article>
  );
}
