import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: "🏠" },
  {
    to: "/developer",
    label: "Developer Path",
    icon: "💻",
    children: [
      {
        to: "/generic-project",
        label: "Generic Project",
        icon: ">",
      },
      {
        to: "/help-desk-project",
        label: "Help Desk Project",
        icon: ">",
      },
      {
        to: "/help-desk-interactive-project",
        label: "Help Desk Interactive",
        icon: ">",
      },
    ],
  },
  { to: "/business", label: "Business Path", icon: "📈" },
  { to: "/certifications", label: "Certifications", icon: "🎓" },
];

export function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="sidenav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        <span className={`hamburger ${isOpen ? "open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav className={`sidenav ${isOpen ? "open" : ""}`}>
        <div className="sidenav-header">
          <span className="sidenav-brand">AI Learning Path</span>
        </div>
        <ul className="sidenav-links">
          {navItems.map(({ to, label, icon, children }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `sidenav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="sidenav-link-icon">{icon}</span>
                <span className="sidenav-link-label">{label}</span>
              </NavLink>
              {children && (
                <ul className="sidenav-sublinks">
                  {children.map(
                    ({ to: subTo, label: subLabel, icon: subIcon }) => (
                      <li key={subTo}>
                        <NavLink
                          to={subTo}
                          className={({ isActive }) =>
                            `sidenav-link ${isActive ? "active" : ""}`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="sidenav-link-icon">{subIcon}</span>
                          <span className="sidenav-link-label">{subLabel}</span>
                        </NavLink>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="sidenav-backdrop" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
