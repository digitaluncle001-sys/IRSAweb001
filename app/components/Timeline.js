import { timeline } from "../../data/election";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Election Schedule</span>
          <h2>IMPORTANT DATES</h2>
          <p>
            Key milestones for the 2026 IRSA Election, from the announcement
            through Election Day.
          </p>
        </Reveal>

        <Reveal>
          <ol className="timeline">
            {timeline.map((item, i) => (
              <li
                key={i}
                className={
                  "timeline-item" +
                  (item.highlight ? " is-highlight" : "") +
                  (item.pending ? " is-pending" : "")
              }
              >
                <span className="timeline-dot" aria-hidden="true" />
                <p className="timeline-date">{item.date}</p>
                <p className="timeline-title">{item.title}</p>
                {item.detail && <p className="timeline-detail">{item.detail}</p>}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
