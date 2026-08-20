/**
 * Signal & Structure: evidence-led profile summary using asymmetric reading and systems-note panels.
 */
import { Braces, Lightbulb, Layers3, Network } from "lucide-react";
import SectionHeader from "./SectionHeader";

const focusAreas = [
  { icon: Braces, title: "Full-stack systems", text: "Building connected frontend, backend, and cloud experiences." },
  { icon: Layers3, title: "Web & mobile", text: "Creating experiences across React and Flutter." },
  { icon: Network, title: "AI integration", text: "Exploring practical AI and OCR capabilities in applications." },
  { icon: Lightbulb, title: "Problem solving", text: "Translating real-world needs into focused software workflows." },
];

export default function About() {
  return (
    <section id="about" className="content-section about-section section-anchor" aria-labelledby="about-title">
      <SectionHeader number="02" label="Profile" title="A practical approach to building software." />
      <div className="about-layout">
        <div className="about-statement reveal">
          <p className="lead-copy">
            I&apos;m a Computer Science graduate focused on full-stack development and interested in making web, mobile, backend, and AI-powered applications useful in the real world.
          </p>
          <p>
            My work brings together React, Flutter, Python, Flask, Firebase, and AI integration. I enjoy working through the details of a product—from clear interfaces to connected services and verification workflows—and using problem solving to make each part work together.
          </p>
          <a className="inline-link" href="#projects">See the work in context <span aria-hidden="true">↘</span></a>
        </div>
        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, title, text }, index) => (
            <article className="focus-item reveal" key={title} style={{ "--delay": `${index * 55}ms` }}>
              <span className="focus-icon"><Icon size={18} strokeWidth={1.7} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
