import { committee } from "../../data/election";
import Reveal from "./Reveal";

export default function Committee() {
  return (
    <section id="committee" className="committee-section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Administration</span>
          <h2>{committee.heading}</h2>
          <p>{committee.blurb}</p>
        </Reveal>

        <Reveal>
          <div className="cards-grid committee-grid-cards">
            {committee.members.map((m, i) => (
              <article className="card committee-card" key={i}>
                <img
                  className="committee-photo"
                  src={m.photo}
                  alt={"Portrait of " + m.name}
                />
                <p className="committee-role">{m.role}</p>
                <h3 className="committee-name">{m.name}</h3>
                <p className="committee-meta">{m.level}</p>
                <p className="committee-meta committee-phone">{m.phone}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="card committee-field" style={{ marginTop: "2rem" }}>
          <p className="label">Electoral Committee Contact</p>
          <p className="value">{committee.contact}</p>
        </Reveal>
      </div>
    </section>
  );
}
