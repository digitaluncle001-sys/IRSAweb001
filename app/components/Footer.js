import { site, election, footerNote } from "../../data/election";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <img
            className="footer-logo"
            src={site.logo}
            alt="International Relations Students' Association logo"
            width="96"
            height="96"
          />
          <div>
            <p className="footer-org">
              International Relations Students' Association (IRSA)
            </p>
            <p className="footer-dept">{site.department}</p>
            <span className="footer-election">
              {election.year} IRSA Election
            </span>
          </div>
          <p className="footer-note">{footerNote}</p>
        </div>
        <p className="footer-tagline">
          {site.tagline} — {site.association}, {site.department}.
        </p>
      </div>
    </footer>
  );
}
