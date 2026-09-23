"use client";

import { useState } from "react";

// Accessible accordion. items: [{ id?, title, body }]
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = "acc-panel-" + i;
        const buttonId = "acc-button-" + i;
        return (
          <div key={i} className={"acc-item" + (open ? " open" : "")}>
            <h3 style={{ margin: 0 }}>
              <button
                id={buttonId}
                className="acc-button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                {item.title}
                <span className="acc-chevron" aria-hidden="true">
                  ▾
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="acc-panel"
              style={{ maxHeight: open ? "320px" : "0" }}
            >
              <div className="acc-panel-inner">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
