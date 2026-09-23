import Header from "./components/Header";
import Hero from "./components/Hero";
import StatusCard from "./components/StatusCard";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Eligibility from "./components/Eligibility";
import ApplicationRequirements from "./components/ApplicationRequirements";
import Candidates from "./components/Candidates";
import Voting from "./components/Voting";
import CampaignRules from "./components/CampaignRules";
import ElectionRules from "./components/ElectionRules";
import Complaints from "./components/Complaints";
import Results from "./components/Results";
import FAQ from "./components/FAQ";
import Committee from "./components/Committee";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StatusCard />
        <Countdown />
        <Timeline />
        <Eligibility />
        <ApplicationRequirements />
        <Candidates />
        <Voting />
        <CampaignRules />
        <ElectionRules />
        <Complaints />
        <Results />
        <FAQ />
        <Committee />
      </main>
      <Footer />
    </>
  );
}
