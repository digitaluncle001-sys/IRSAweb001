import { election } from "../../data/election";
import Reveal from "./Reveal";

// The displayed status is driven entirely by `election.status`
// in data/election.js. Change that value to update this card.
export default function StatusCard() {
  return (
    <section className="status-wrap" aria-label="Election status">
      <div className="container">
        <Reveal className="card status-card">
          <div>
            <p className="status-label">ELECTION STATUS</p>
            <p className="status-value">
              <span className="status-dot" aria-hidden="true" />
              {election.status}
            </p>
          </div>
          <p className="status-hint">
            This status is updated by the Election Committee as the election
            process progresses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
