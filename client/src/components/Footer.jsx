/**
 * Signal & Structure: compact closing identity with transparent placeholder links and a clear return path.
 */
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="#home">Riham<span>.</span></a>
        <p>Junior Full-Stack Developer</p>
        <div className="footer-links" aria-label="Footer links">
          <a href="https://github.com/rihamaljazairi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} aria-hidden="true" /></a>
          <a href="https://linkedin.com/in/rihamaljazairi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} aria-hidden="true" /></a>
          <a href="mailto:rihamaljazairi@gmail.com" aria-label="Email"><Mail size={17} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer-meta"><span>© 2026 Riham Mohammad Al Jazairi</span><span>Built with care, grounded in real work.</span></div>
    </footer>
  );
}
