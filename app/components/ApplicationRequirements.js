import { application, election } from "../../data/election";
import Reveal from "./Reveal";

export default function ApplicationRequirements() {
  const ready = Boolean(election.applicationUrl);
  const fs = election.formSales;

  return (
    <section id="application">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Apply</span>
          <h2>APPLICATION REQUIREMENTS</h2>
          <p>{application.intro}</p>
        </Reveal>

        <div className="grid-2">
          <Reveal className="card pad-card">
            <p className="mini-title">Required documents</p>
            <ul className="doc-list">
              {application.documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="card pad-card">
            <p className="mini-title">How to apply</p>
            <p>
              Forms go on sale on <strong>{fs.opens}</strong> and sales end on{" "}
              <strong>{fs.closes}</strong>. Purchase your form from any member
              of the Electoral Committee and submit your complete application
              physically before the deadline. {fs.note}
            </p>
            <p className="mini-title" style={{ marginTop: "1.25rem" }}>
              Official payment account
            </p>
            <p>
              Account name: <strong>{fs.accountName}</strong>
              <br />
              Account number: <strong>{fs.accountNumber}</strong>
              <br />
              Bank: <strong>{fs.bank}</strong>
            </p>
            {ready ? (
              <a
                href={election.applicationUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                CHAT WITH ZION
              </a>
            ) : (
              <button type="button" className="btn btn-disabled" disabled>
                CHAT WITH ZION
              </button>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
