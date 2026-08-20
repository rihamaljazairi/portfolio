/**
 * Signal & Structure: reusable technical section heading with registration labels and a signal rule.
 */
export default function SectionHeader({ number, label, title, intro }) {
  return (
    <header className="section-header reveal">
      <div className="section-ident">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <div className="section-heading-content">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
      <div className="heading-rule" aria-hidden="true"><span /><i /><b /></div>
    </header>
  );
}
