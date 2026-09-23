import { site, election } from "../../data/election";
import Reveal from "./Reveal";

export default function Hero() {
  const votingReady = Boolean(election.votingUrl);

  return (
    <section id="home" className="hero">
      <div className="container">
        <Reveal>
          <img
            className="hero-logo"
            src={site.logo}
            alt="International Relations Students' Association logo"
          />
          <p className="hero-eyebrow">{site.tagline}</p>
          <h1>{election.title}</h1>
          <p className="hero-sub">{election.subheading}</p>
          <p className="hero-portal">{election.portalLabel}</p>
          <p className="hero-intro">{election.intro}</p>
        </Reveal>

        <Reveal>
          <div>
            <span className="hero-date">{election.dateLabel}</span>
            <p className="hero-hours">Voting: {election.votingHours}</p>
          </div>

          <div className="hero-ctas">
            <a href="#timeline" className="btn btn-primary">
              VIEW ELECTION TIMELINE
            </a>
            {votingReady ? (
              <a
                href={election.votingUrl}
                className="btn btn-gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                VOTE NOW
              </a>
            ) : (
              <button type="button" className="btn btn-gold" disabled>
                IN-PERSON VOTING — 13 OCTOBER
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
