/**
 * Signal & Structure: direct opportunity-focused contact close with visible and honest contact placeholders.
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
          <a href="mailto:rihamaljazairi@gmail.com" className="contact-link placeholder-link" aria-label="Email placeholder, replace before use">
            <Mail size={19} aria-hidden="true" /><span><small>Email</small><strong>rihamaljazairi@gmail.com</strong></span><ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="https://github.com/rihamaljazairi" className="contact-link" target="_blank" rel="noreferrer">
            <Github size={19} aria-hidden="true" /><span><small>GitHub</small><strong>github.com/rihamaljazairi</strong></span><ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/riham-aljazairi-91ab853b3/" className="contact-link placeholder-link" aria-label="LinkedIn placeholder, replace before use">
            <Linkedin size={19} aria-hidden="true" /><span><small>LinkedIn</small><strong>linkedin.com/in/riham-aljazairi-91ab853b3</strong></span><ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>Get-Content client/index.html
        
      </div>
    </section>
  );
}
