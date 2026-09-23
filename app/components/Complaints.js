import { complaints, election } from "../../data/election";
import Reveal from "./Reveal";

export default function Complaints() {
  const ready = Boolean(election.complaintUrl);

  return (
    <section id="complaints">
      <div className="container">
        <Reveal className="card pad-card" style={{ maxWidth: "780px" }}>
          <span className="section-eyebrow">Grievances</span>
          <h2>COMPLAINTS &amp; ELECTORAL ENQUIRIES</h2>
          <p>{complaints.text}</p>
          {ready ? (
            <a
              href={election.complaintUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {complaints.buttonLabel}
            </a>
          ) : (
            <button type="button" className="btn btn-disabled" disabled>
              {complaints.buttonLabel} — TO BE CONFIRMED
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
