/**
 * Signal & Structure: direct opportunity-focused contact close with clean, verified contact links.
 */
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="content-section contact-section section-anchor" aria-labelledby="contact-title">
      <SectionHeader number="07" label="Contact" title="Let&apos;s build something great." />
      <div className="contact-panel reveal">
        <div className="contact-copy">
          <span className="contact-kicker">Junior roles · Internships · Project collaboration</span>
          <p>I&apos;m open to junior software development opportunities, internships, and projects where I can grow and contribute.</p>
          <div className="contact-location"><MapPin size={16} aria-hidden="true" /> Saida, Lebanon</div>
        </div>
        <div className="contact-links">
          <a href="mailto:rihamaljazairi@gmail.com" className="contact-link" aria-label="Send email to Riham Aljazairi">
            <Mail size={19} aria-hidden="true" /><span><small>Email</small><strong>rihamaljazairi@gmail.com</strong></span><ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="https://github.com" className="contact-link" target="_blank" rel="noreferrer">
            <Github size={19} aria-hidden="true" /><span><small>GitHub</small><strong>://github.com</strong></span><ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noreferrer">
            <Linkedin size={19} aria-hidden="true" /><span><small>LinkedIn</small><strong>://linkedin.com</strong></span><ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
