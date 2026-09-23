import { rules } from "../../data/election";
import Reveal from "./Reveal";
import Accordion from "./Accordion";

export default function ElectionRules() {
  return (
    <section id="rules">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Procedures</span>
          <h2>ELECTION RULES &amp; PROCEDURES</h2>
          <p>Key rules governing the 2026 IRSA Election. Select a topic to read more.</p>
        </Reveal>
        <Reveal>
          <Accordion items={rules.map((r) => ({ title: r.title, body: r.body }))} />
        </Reveal>
      </div>
    </section>
  );
}
