"use client";

import { useEffect, useState } from "react";
import { election } from "../../data/election";
import Reveal from "./Reveal";

// Change the target in data/election.js (`countdownTarget`).
const TARGET = new Date(election.countdownTarget).getTime();
const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const values = {
    days: String(time.days).padStart(2, "0"),
    hours: String(time.hours).padStart(2, "0"),
    minutes: String(time.minutes).padStart(2, "0"),
    seconds: String(time.seconds).padStart(2, "0"),
  };

  return (
    <section className="countdown-section" aria-label="Countdown to Election Day">
      <div className="container countdown-inner">
        <Reveal>
          <p className="countdown-title">
            ELECTION DAY — {election.dateLabel}
          </p>
          <div className="countdown-grid" role="timer" aria-live="polite">
            {UNITS.map((unit) => (
              <div className="countdown-cell" key={unit.key}>
                <strong>{values[unit.key]}</strong>
                <span>{unit.label}</span>
              </div>
            ))}
          </div>
          {time.done && (
            <p className="countdown-done">
              It is Election Day — {election.votingHours}.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
