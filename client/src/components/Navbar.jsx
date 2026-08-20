/**
 * Signal & Structure: compact navigation with a cyan signal state and accessible mobile drawer.
 */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Education", target: "education" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const visible = navigation
        .map((item) => ({ ...item, node: document.getElementById(item.target) }))
        .filter((item) => item.node)
        .reduce((current, item) => {
          const top = item.node.getBoundingClientRect().top;
          return top <= 160 && top > -window.innerHeight * 0.55 ? item : current;
        }, null);
      if (visible) setActive(visible.target);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-frame">
        <a className="brand" href="#home" aria-label="Riham Mohammad Al Jazairi, home" onClick={closeMenu}>
          <span className="brand-mark-wrap" aria-hidden="true"><img src="/assets/riham-signal-mark.webp" alt="" className="brand-mark" /><i /></span>
          <span className="brand-name">Riham<span>.</span></span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>

        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <div className="nav-links">
            {navigation.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                className={active === item.target ? "active" : ""}
                aria-current={active === item.target ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="#projects" onClick={closeMenu}>
            View My Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
