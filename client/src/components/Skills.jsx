/**
 * Signal & Structure: grouped technology evidence presented as a quiet, structured skills index.
 */
import { BrainCircuit, Cloud, Code2, FolderGit2, ServerCog, Smartphone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  { icon: Code2, label: "Frontend", stack: ["React", "JavaScript", "Vite", "HTML", "CSS"] },
  { icon: Smartphone, label: "Mobile", stack: ["Flutter", "Dart"] },
  { icon: ServerCog, label: "Backend", stack: ["Python", "Flask", "REST APIs"] },
  { icon: Cloud, label: "Database / Cloud", stack: ["Firebase", "Firestore", "Firebase Authentication"] },
  { icon: BrainCircuit, label: "AI", stack: ["DeepFace", "Tesseract OCR"] },
  { icon: FolderGit2, label: "Tools", stack: ["Git", "GitHub", "VS Code", "Postman"] },
];

export default function Skills() {
  return (
    <section id="skills" className="content-section skills-section section-anchor" aria-labelledby="skills-title">
      <SectionHeader number="03" label="Toolkit" title="Technologies I use to connect the pieces." intro="A focused stack for web, mobile, cloud, and AI-enabled application development." />
      <div className="skills-index">
        {skillGroups.map(({ icon: Icon, label, stack }, index) => (
          <article className="skill-group reveal" key={label} style={{ "--delay": `${index * 45}ms` }}>
            <div className="skill-group-heading">
              <span className="skill-number">0{index + 1}</span>
              <span className="skill-icon"><Icon size={20} strokeWidth={1.65} aria-hidden="true" /></span>
              <h3>{label}</h3>
            </div>
            <ul>
              {stack.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
