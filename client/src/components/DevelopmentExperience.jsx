/**
 * Signal & Structure: transparent project-based development experience, never presented as employment history.
 */
import { BrainCircuit, Code2, Database, LayoutPanelTop, Smartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  { icon: Code2, title: "Full-stack application development", summary: "Connecting interfaces, services, and practical application workflows." },
  { icon: BrainCircuit, title: "AI integration", summary: "Working with AI-based face verification and document OCR capabilities." },
  { icon: LayoutPanelTop, title: "React dashboard development", summary: "Building clear administration experiences for review and verification workflows." },
  { icon: Smartphone, title: "Flutter mobile development", summary: "Creating mobile application experiences alongside web systems." },
  { icon: Database, title: "Flask & Firebase integration", summary: "Using backend APIs, authentication, and cloud data services together." },
];

export default function DevelopmentExperience() {
  return (
    <section id="experience" className="content-section experience-section" aria-labelledby="experience-title">
      <SectionHeader number="05" label="Practice" title="Development experience shaped through projects." intro="Project-based development experience—not employment history." />
      <div className="experience-layout reveal">
        <p className="experience-context">Each area reflects work developed through hands-on application building and an ongoing focus on practical, connected software systems.</p>
        <ol className="experience-list">
          {experiences.map(({ icon: Icon, title, summary }, index) => (
            <li key={title}>
              <span className="experience-index">0{index + 1}</span>
              <span className="experience-icon"><Icon size={18} strokeWidth={1.65} aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{summary}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
