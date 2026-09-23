import { eligibility, positions } from "../../data/election";
import Reveal from "./Reveal";

export default function Eligibility() {
  return (
    <section id="eligibility">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Candidates</span>
          <h2>WHO CAN CONTEST?</h2>
          <p>{eligibility.intro}</p>
        </Reveal>

        <Reveal>
          <ul className="check-list">
            {eligibility.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal style={{ marginTop: "2.5rem" }}>
          <div className="table-wrap">
            <table>
              <caption>Positions, Eligible Levels, CGPA &amp; Form Prices</caption>
              <thead>
                <tr>
                  <th scope="col">Position</th>
                  <th scope="col">Eligible Level</th>
                  <th scope="col">Required CGPA</th>
                  <th scope="col">Price of Form</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((row, i) => (
                  <tr key={i}>
                    <td>{row.position}</td>
                    <td className="level-cell">{row.level}</td>
                    <td className="level-cell">{row.cgpa}</td>
                    <td className="level-cell">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
