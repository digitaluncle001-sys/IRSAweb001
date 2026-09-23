import { results, resultsPlaceholder } from "../../data/election";
import Reveal from "./Reveal";

export default function Results() {
  return (
    <section id="results">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Outcome</span>
          <h2>ELECTION RESULTS</h2>
        </Reveal>

        {results.length === 0 ? (
          <Reveal>
            <div className="placeholder-state">
              <span className="placeholder-badge">Awaiting Election</span>
              <p>{resultsPlaceholder}</p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Elected Candidate</th>
                    <th scope="col">Votes Received</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i}>
                      <td>{r.position}</td>
                      <td className="level-cell">{r.candidate}</td>
                      <td>{r.votes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
