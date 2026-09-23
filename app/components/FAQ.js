import { faqs } from "../../data/election";
import Reveal from "./Reveal";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Help</span>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
        </Reveal>
        <Reveal>
          <Accordion items={faqs.map((f) => ({ title: f.q, body: f.a }))} />
        </Reveal>
      </div>
    </section>
  );
}
