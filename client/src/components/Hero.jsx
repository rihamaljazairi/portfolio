/**
 * Signal & Structure: asymmetric opening with real positioning, a photo placeholder, and a generated systems visual.
 */
import { ArrowDownRight, ArrowUpRight, Github, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section section-anchor" aria-labelledby="hero-heading">
      <div className="hero-grid-pattern" aria-hidden="true" />
      <div className="layout-rail hero-rail" aria-hidden="true">
        <span>01</span>
        <span>Profile</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy reveal">
          <div className="eyebrow-row">
            <span className="signal-dot" aria-hidden="true" />
            <span>Available for junior opportunities</span>
            <span className="eyebrow-divider" aria-hidden="true" />
            <span className="location-inline"><MapPin size={13} aria-hidden="true" /> Saida, Lebanon</span>
          </div>
          <p className="hero-kicker">Hi, I&apos;m Riham Mohammad Al Jazairi</p>
          <h1 id="hero-heading">
            Building useful systems across <span>web, mobile, and AI.</span>
          </h1>
          <p className="hero-description">
            Junior Full-Stack Developer and Computer Science graduate building practical applications with React, Flutter, Python, Flask, and Firebase.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="https://github.com/rihamaljazairi" target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="text-action" href="#contact">Contact Me</a>
          </div>
          <div className="hero-footnote">
            <span>Full-stack development</span>
            <span>AI integration</span>
            <span>Real-world applications</span>
          </div>
        </div>

        <div className="hero-visual reveal" aria-label="Abstract developer systems visual">
          <img className="hero-visual-image" src="/assets/riham-hero-systems.webp" alt="Abstract developer workstation with web, mobile, and AI system layers" />
          <div className="visual-corner visual-corner-top" aria-hidden="true" />
          <div className="visual-corner visual-corner-bottom" aria-hidden="true" />
          <div className="profile-placeholder">
            <div className="placeholder-orb" aria-hidden="true"><span /></div>
            <div>
              <span className="tiny-label">Professional photo</span>
              <strong>Placeholder</strong>
              <p>Add a professional headshot here.</p>
            </div>
          </div>
          <div className="visual-caption">
            <span>System sketch</span>
            <span>WEB / MOBILE / AI</span>
          </div>
          <div className="visual-system-labels" aria-hidden="true">
            <span>React interface</span><span>Flutter flow</span><span>Python services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
