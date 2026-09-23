import { election, voting } from "../../data/election";
import Reveal from "./Reveal";

const BALLOT_ICON = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#E9C766"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 11l3 3 8-8" />
    <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
  </svg>
);

export default function Voting() {
  return (
    <section id="voting">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Voting</span>
          <h2>WHO CAN VOTE?</h2>
          <p>{voting.whoCanVoteIntro}</p>
          <p>{voting.whoCannotVote}</p>
        </Reveal>

        <Reveal className="voter-box">{BALLOT_ICON}{voting.eligibleVotersBox}</Reveal>

        <div className="grid-2" style={{ marginTop: "2.5rem" }}>
          <Reveal className="card pad-card">
            <span className="section-eyebrow">Instructions</span>
            <h2 style={{ fontSize: "1.5rem" }}>HOW TO VOTE</h2>
            <p>{voting.howToVoteText}</p>
            <div className="vote-date">
              <strong>{election.dateLabel}</strong>
              <span>{election.votingHours}</span>
            </div>
          </Reveal>

          <Reveal className="card pad-card">
            <span className="section-eyebrow">Election Day</span>
            <h2 style={{ fontSize: "1.5rem" }}>IN-PERSON VOTING</h2>
            <p>{voting.venueText}</p>
            <button type="button" className="btn btn-disabled locked-btn" disabled>
              {voting.lockedButtonLabel}
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
