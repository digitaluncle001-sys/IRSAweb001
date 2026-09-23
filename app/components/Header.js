"use client";

import { useState } from "react";
import { site, election } from "../../data/election";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Timeline", href: "#timeline" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Candidates", href: "#candidates" },
  { label: "Voting", href: "#voting" },
  { label: "Rules", href: "#rules" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <img src={site.logo} alt="IRSA logo" width="42" height="42" />
          <span className="brand-name">
            IRSA
            <span>Election {election.year}</span>
          </span>
        </a>

        <nav aria-label="Primary">
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <ul id="primary-nav" className={"nav-links" + (open ? " open" : "")}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
