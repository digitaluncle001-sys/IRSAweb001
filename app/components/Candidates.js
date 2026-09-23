import { candidates, candidatesIntro, candidatesPlaceholder } from "../../data/election";
import Reveal from "./Reveal";

export default function Candidates() {
  return (
    <section id="candidates">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Candidates</span>
          <h2>2026 ELECTION CANDIDATES</h2>
          <p>{candidatesIntro}</p>
        </Reveal>

        {candidates.length === 0 ? (
          <Reveal>
            <div className="placeholder-state">
              <span className="placeholder-badge">To Be Published</span>
              <p>{candidatesPlaceholder}</p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="cards-grid">
              {candidates.map((c, i) => (
                <article className="card candidate-card" key={i}>
                  <img
                    className="candidate-photo"
                    src={c.photo}
                    alt={"Portrait of " + c.name}
                  />
                  <div className="candidate-body">
                    <p className="candidate-position">{c.position}</p>
                    <h3 className="candidate-name">{c.name}</h3>
                    <p className="candidate-level">{c.level}</p>
                    <p className="candidate-profile">{c.profile}</p>
                    {c.manifestoUrl ? (
                      <a
                        href={c.manifestoUrl}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        READ MANIFESTO
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
