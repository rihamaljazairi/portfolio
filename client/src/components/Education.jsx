/**
 * Signal & Structure: restrained education timeline with only supplied academic details.
 */
import { GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="content-section education-section section-anchor" aria-labelledby="education-title">
      <SectionHeader number="06" label="Education" title="Built on a Computer Science foundation." />
      <div className="education-timeline reveal">
        <div className="timeline-pin" aria-hidden="true"><GraduationCap size={22} strokeWidth={1.6} /></div>
        <div className="timeline-line" aria-hidden="true" />
        <div className="education-card">
          <div className="education-card-top"><span>2025–2026</span><span>Academic foundation</span></div>
          <h3>Bachelor Degree in Computer Science</h3>
          <p>Islamic University of Lebanon</p>
        </div>
      </div>
    </section>
  );
}
