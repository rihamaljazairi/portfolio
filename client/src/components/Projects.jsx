/**
 * Signal & Structure: featured project evidence with authored case-study stages and live links.
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

const businessFlowFeatures = [
  "JWT authentication & Role-Based Access Control (RBAC)",
  "Executive dashboard with Recharts revenue analytics",
  "Automated low-stock inventory alerts & SKU tracking",
  "End-to-end B2B order & multi-method payment lifecycle",
  "Automated invoice generation with tax & status tracking",
  "Admin-protected HR directory & system audit trail",
];

export default function Projects() {
  return (
    <section id="projects" className="content-section projects-section section-anchor" aria-labelledby="projects-title">
      <SectionHeader number="04" label="Selected work" title="Projects built around real verification and workflow needs." intro="A focused selection of full-stack development work, combining AI verification and enterprise business management." />
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
          github="https://github.com"
          demo="https://google.com"
          status="Final Year Project"
          category="Full-stack · AI · Healthcare"
        />
        <ProjectCard
          title="BusinessFlow ERP"
          subtitle="Enterprise Resource Planning & Inventory Platform"
          description="BusinessFlow ERP is a full-stack business management system engineered to streamline B2B sales, order fulfillment, invoicing, and inventory control. Built with React, Node.js, Express, and PostgreSQL, it enforces JWT security, role-based access control, rate limiting, and real-time executive analytics."
          image="/assets/businessflow-erp-stage.png"
          imageAlt="BusinessFlow ERP executive dashboard showing revenue charts, KPIs, and inventory alerts"
          tech={["React", "Node.js", "Express", "PostgreSQL", "JWT", "RBAC", "Recharts", "REST APIs"]}
          features={businessFlowFeatures}
          github="https://github.com"
          demo="https://github.com#quick-start"
          status="Completed"
          category="Full-stack · ERP · PostgreSQL"
        />
      </div>
    </section>
  );
}

