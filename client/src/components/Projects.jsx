/**
 * Signal & Structure: featured project evidence with a large authored case-study stage and honest future-work state.
 */
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const healthVerifyFeatures = [
  "AI face verification",
  "Document OCR verification",
  "Healthcare staff registration",
  "Admin dashboard",
  "Pending verification workflow",
  "Approval and rejection workflow",
  "QR-based public verification",
  "Firebase Authentication & Firestore",
  "REST API integration",
];

export default function Projects() {
  return (
    <section id="projects" className="content-section projects-section section-anchor" aria-labelledby="projects-title">
      <SectionHeader number="04" label="Selected work" title="Projects built around real verification and workflow needs." intro="A focused selection of development work, led by an AI-enabled final-year project." />
      <div className="project-callout reveal">
        <span className="callout-tag">Featured case study</span>
        <p>HealthVerify connects a dashboard, mobile application, AI services, and Firebase workflows in one verification system.</p>
      </div>
      <div className="projects-stack">
        <ProjectCard
          title="HealthVerify"
          subtitle="AI Healthcare Staff Verification System"
          description="HealthVerify is a full-stack healthcare staff verification system designed to assist administrators in verifying healthcare professionals. The system combines AI-based face verification, document OCR, a React administration dashboard, a Flutter mobile application, a Flask AI backend, and Firebase services."
          image="/assets/healthverify-project-stage.webp"
          imageAlt="Abstract software system illustration for healthcare staff verification"
          tech={["React", "Flutter", "Python", "Flask", "Firebase", "DeepFace", "Tesseract OCR"]}
          features={healthVerifyFeatures}
          github="https://github.com/rihamaljazairi/healthverify"
          demo="#demo"
          status="Final Year Project"
          category="Full-stack · AI · Healthcare"
        />
        <ProjectCard
          title="JobTrack AI"
          subtitle="AI-Powered Job Tracking Platform"
          description="A future project concept. Implementation details, screenshots, and features will be added when they are ready to share."
          image="/assets/jobtrack-coming-soon.webp"
          imageAlt="Abstract project placeholder visual for a future AI-powered job tracking platform"
          status="To Be Added"
          category="Future project"
          comingSoon
        />
      </div>
    </section>
  );
}
