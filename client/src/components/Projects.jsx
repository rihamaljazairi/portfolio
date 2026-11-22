/**
 * Signal & Structure: featured project evidence with a large authored case-study stage and honest future-work state.
 */
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const healthVerifyFeatures = [
  "AI face comparison & verification (DeepFace & Flask)",
  "Automated document text extraction (Tesseract OCR)",
  "Healthcare staff mobile registration (Flutter)",
  "Real-time Admin verification dashboard (React)",
  "Pending, approval, and rejection workflows",
  "QR-based public credential verification",
  "Firebase Authentication & Cloud Firestore",
  "RESTful API architecture",
];

export default function Projects() {
  return (
    <section id="projects" className="content-section projects-section section-anchor" aria-labelledby="projects-title">
      <SectionHeader number="04" label="Selected work" title="Projects built around real verification and workflow needs." intro="A focused selection of development work, led by an AI-enabled final-year project." />
      <div className="project-callout reveal">
        <span className="callout-tag">Featured case study</span>
        <p>HealthVerify connects a React dashboard, Flutter mobile app, Python/Flask AI services, and Firebase workflows in one end-to-end verification system.</p>
      </div>
      <div className="projects-stack">
        <ProjectCard
          title="HealthVerify"
          subtitle="AI Healthcare Staff Verification System"
          description="HealthVerify is a full-stack healthcare staff verification system built to streamline credential auditing. It uses Python and Flask to run Tesseract OCR for full document text extraction and AI facial comparison, paired with a React admin dashboard, a Flutter mobile app, and Firebase real-time services."
          image="/assets/healthverify-project-stage.webp"
          imageAlt="HealthVerify AI healthcare staff verification system architecture and interface"
          tech={["React", "Flutter", "Python", "Flask", "Firebase", "REST APIs", "SQL", "Tesseract OCR", "DeepFace"]}
          features={healthVerifyFeatures}
          github="https://github.com/rihamaljazairi/healthverify"
          demo="https://github.com"
          status="Final Year Project"
          category="Full-stack · AI · Healthcare"
        />
        <ProjectCard
          title="JobTrack AI"
          subtitle="AI-Powered Job Tracking Platform"
          description="Currently in development: an intelligent application tracker designed to organize job submissions, analyze role requirements, and track interview pipelines."
          image="/assets/jobtrack-coming-soon.webp"
          imageAlt="JobTrack AI project preview visual"
          status="In Progress"
          category="Upcoming project"
          comingSoon
        />
      </div>
    </section>
  );
}
