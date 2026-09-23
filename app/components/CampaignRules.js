import { campaign } from "../../data/election";
import Reveal from "./Reveal";

const WARNING_ICON = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
    <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
  </svg>
);

export default function CampaignRules() {
  return (
    <section id="campaign-rules">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Campaigning</span>
          <h2>CAMPAIGN RULES</h2>
          <p>{campaign.intro}</p>
        </Reveal>

        <Reveal className="card pad-card">
          <p className="mini-title">Permitted campaign methods</p>
          <ul className="check-list">
            {campaign.permitted.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="prohibited">
          <p className="prohibited-title">
            {WARNING_ICON}
            STRICTLY PROHIBITED
          </p>
          <div className="prohibited-grid">
            {campaign.prohibited.map((item, i) => (
              <div className="prohibited-item" key={i}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="prohibited-end">{campaign.endsLabel}</p>
        </Reveal>
      </div>
    </section>
  );
}
