// ============================================================
// 2026/2027 IRSA ELECTION — CENTRAL DATA / CONFIGURATION
// ------------------------------------------------------------
// ★ THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE SITE ★
// Change dates, status, candidates, results, committee members,
// voting info and prices here — every section updates automatically.
// ============================================================

export const site = {
  title:
    "2026/2027 IRSA Election | International Relations Students' Association",
  description:
    "Official information portal for the 2026/2027 International Relations Students' Association Election. Find election dates, candidate information, eligibility requirements, form prices, voting instructions and election rules.",
  association: "International Relations Students' Association",
  associationShort: "IRSA",
  department: "Department of International Relations and Diplomacy",
  tagline: "Unity, prestige and progress.",
  logo: "/IRSA_Logo.png",
};

export const election = {
  year: "2026/2027",
  title: "2026/2027 IRSA ELECTION",
  subheading: "International Relations Students' Association",
  portalLabel: "Official Election Information Portal",
  intro:
    "Stay informed about the 2026/2027 IRSA Election — including election dates, candidate information, eligibility requirements, form prices, voting instructions and election rules.",
  dateLabel: "13 OCTOBER 2026",
  votingHours: "In-person voting — venue will be announced by the Electoral Committee",

  // Countdown target — West Africa Time (UTC+1). Easy to change:
  countdownTarget: "2026-10-13T00:00:00+01:00",

  // ------------------------------------------------------------
  // ELECTION STATUS — set ONE of the following values:
// "Applications Open" | "Applications Closed" | "Screening" |
// "Candidates Confirmed" | "Campaign Period" | "Voting Open" |
// "Voting Closed" | "Results Published" | "[TO BE CONFIRMED]"
// ------------------------------------------------------------
status: "Applications Open",

// URLs
// Application is physical, so applicationUrl remains null.
// Voting is also conducted physically, so votingUrl remains null.
// Add a URL only if the process changes to online.
// ------------------------------------------------------------
votingUrl: null,       // Voting is offline (in person)
applicationUrl: "https://wa.me/2349164021253",  // Applications are submitted physically
complaintUrl: null,    // Add a URL if/when an online complaint form is created

  // ------------------------------------------------------------
  // FORM SALES — who to pay, who to contact
  // ------------------------------------------------------------
  formSales: {
    opens: "23 September 2026",
    closes: "30 September 2026, 11:59 PM",
    note: "Forms are purchased from members of the Electoral Committee listed below. Payment must be made ONLY into the official account communicated by the Electoral Committee — the Committee will not be held accountable for money paid into any other account.",
    accountName: "THOMAS ZION ATSERUNEYINORITSE",
    accountNumber: "1867587480",
    bank: "ACCESS BANK",
  },
};

// ------------------------------------------------------------
// IMPORTANT DATES / TIMELINE — edit freely, add or remove items.
// Set "highlight: true" on the biggest milestone (Election Day).
// ------------------------------------------------------------
export const timeline = [
  {
    date: "23 SEPTEMBER 2026",
    title: "Sale of forms begins",
    detail: "Purchase forms from any member of the Electoral Committee.",
  },
  {
    date: "30 SEPTEMBER 2026",
    title: "Sale of forms ends",
    detail: "11:59 PM — no forms will be sold after this time.",
  },
  {
    date: "2 OCTOBER 2026",
    title: "Screening of candidates",
    detail: "A minimum screening score of 60% is required to qualify.",
  },
  {
    date: "3 OCTOBER 2026",
    title: "Screening results published",
    detail: "Appeals may be lodged within 24 hours of publication.",
  },
  {
    date: "5 OCTOBER 2026",
    title: "Campaigning begins",
    detail: "Only after the official list of cleared candidates is announced.",
  },
  {
    date: "10 OCTOBER 2026",
    title: "Manifesto reading & Presidential Debate",
    detail: "",
  },
  {
    date: "12 OCTOBER 2026",
    title: "Deadline for campaigning",
    detail: "11:59 PM — all campaign activities must end.",
  },
  {
    date: "13 OCTOBER 2026",
    title: "Election Day — Voting",
    detail: "Voting is conducted OFFLINE (in person). Venue announced by the Electoral Committee.",
    highlight: true,
  },
];

// ------------------------------------------------------------
// ELIGIBILITY — general requirements for all candidates
// ------------------------------------------------------------
export const eligibility = {
  intro:
    "Candidates must meet all applicable eligibility requirements at the time of application.",
  requirements: [
    "Be a duly registered student of the Department of International Relations and Diplomacy in the current session.",
    "Be found worthy in learning and character.",
    "Possess a CGPA of at least 3.0 in the most recent result (CGPA requirements per position are listed below).",
    "Candidates for President and Vice President must have a CGPA of 4.0 and above in their most recent result.",
    "Have not appeared before any Student Disciplinary Committee (SDC) at the college or university level.",
    "Produce evidence of payment of IRSA dues from 100 Level to the present level.",
    "Provide a letter of recommendation from any lecturer in the department.",
    "Contest for only one position.",
    "Must not be a member of the Electoral Committee.",
    "Submit all forms in good condition and according to electoral instructions.",
  ],
};

// ------------------------------------------------------------
// POSITIONS & ELIGIBLE LEVELS — CGPA and form price included.
// All positions will be occupied over time and in subsequent levels.
// ------------------------------------------------------------
export const positions = [
  { position: "President", level: "400 Level", cgpa: "4.0 & above", price: "₦10,000" },
  { position: "Vice President", level: "300 / 400 Level", cgpa: "4.0 & above", price: "₦8,000" },
  { position: "General Secretary", level: "400 Level", cgpa: "3.5 & above", price: "₦8,000" },
  { position: "Assistant General Secretary", level: "200 / 300 Level", cgpa: "3.0 & above", price: "₦5,000" },
  { position: "Welfare Director", level: "400 Level", cgpa: "3.0 & above", price: "₦6,000" },
  { position: "Public Relations Officer (PRO)", level: "300 / 400 Level", cgpa: "3.5 & above", price: "₦6,000" },
  { position: "Assistant Public Relations Officer", level: "200 / 300 Level", cgpa: "3.0 & above", price: "₦5,000" },
  { position: "Treasurer", level: "300 / 400 Level", cgpa: "3.5 & above", price: "₦5,000" },
  { position: "Social Director", level: "300 / 400 Level", cgpa: "3.0 & above", price: "₦6,000" },
  { position: "Sports Director", level: "300 / 400 Level", cgpa: "3.0 & above", price: "₦6,000" },
  { position: "Assistant Sports Director", level: "200 / 300 Level", cgpa: "3.0 & above", price: "₦5,000" },
  { position: "Financial Secretary", level: "400 Level", cgpa: "3.5 & above", price: "₦6,000" },
];

// ------------------------------------------------------------
// APPLICATION REQUIREMENTS
// ------------------------------------------------------------
export const application = {
  intro:
    "Candidates are required to purchase their forms from the Electoral Committee and submit their complete application physically before the deadline.",
  documents: [
    "Completed IRSA Post Application Form (bought from the Electoral Committee).",
    "Evidence of payment of the form fee into the official account.",
    "Passport photograph.",
    "Evidence of payment of IRSA dues from 100 Level to the present level.",
    "Letter of recommendation from any lecturer in the department.",
    "Printed copy of your most recent result (as proof of CGPA).",
    "Two copies of your manifesto.",
  ],
  deadline: "30 September 2026, 11:59 PM",
};

// ------------------------------------------------------------
// CANDIDATES
// ------------------------------------------------------------
// To publish candidates, add objects like this to the array:
// {
//   name: "Full Name",
//   position: "President",
//   level: "400 Level",
//   photo: "/candidates/name.jpg",
//   profile: "Short profile text...",
//   manifestoUrl: "/manifestos/name.pdf", // or null
// }
export const candidates = []; // Published after screening & verification.

export const candidatesIntro =
  "Meet the candidates cleared to contest the 2026/2027 IRSA Election.";

export const candidatesPlaceholder =
  "Candidate list will be published after screening and verification.";

// ------------------------------------------------------------
// VOTING — offline (in person) on Election Day
// ------------------------------------------------------------
export const voting = {
  whoCanVoteIntro:
    "All duly registered students of the Department of International Relations and Diplomacy from 100 Level to 400 Level are eligible to vote.",
  whoCannotVote:
    "Students from other departments are not eligible to vote.",
  eligibleVotersBox: "Eligible voters: 100–400 Level IR students",
  howToVoteText:
    "Voting will be conducted OFFLINE on Election Day — in person, at the venue announced by the Electoral Committee. Bring your student ID or proof of registration. There is no online voting link; ignore any link claiming to be the IRSA voting portal.",
  venueText:
    "Voting venue and hours will be announced by the Electoral Committee before Election Day. Check this website and official IRSA channels for updates.",
  lockedButtonLabel: "IN-PERSON VOTING — VENUE TO BE ANNOUNCED",
};

// ------------------------------------------------------------
// CAMPAIGN RULES
// ------------------------------------------------------------
export const campaign = {
  intro:
    "Campaigning is NOT permitted until after the purchase of nomination forms and the announcement of screening results by the Electoral Committee. Campaign runs from 5 October to 12 October 2026.",
  permitted: [
    "WhatsApp and social media",
    "Class visits",
    "Direct engagement with students",
    "Campaign materials",
    "Manifesto presentations",
  ],
  prohibited: [
    {
      title: "No campaigning before clearance",
      text: "Candidates who have not paid for forms, and any candidate before screening results are announced, are not allowed to campaign.",
    },
    {
      title: "No vote buying or palliatives",
      text: "Sharing of palliatives is strictly prohibited. Candidates must not provide anything intended to sway the decisions of voters.",
    },
    {
      title: "No threats, incitement or violence",
      text: "Candidates or their supporters must not threaten, incite or use violence, directly or indirectly, during the election period.",
    },
    {
      title: "No defamation or provocation",
      text: "Abusive, slanderous or provocative language — including religious or emotional incitement — is prohibited.",
    },
  ],
  endsLabel: "Campaigning ends 11:59 PM on 12 October 2026.",
};

// ------------------------------------------------------------
// ELECTION RULES & PROCEDURES (accordion)
// ------------------------------------------------------------
export const rules = [
  {
    title: "Candidate screening",
    body: "Only candidates who meet the requirements and are cleared during screening will appear on the official candidate list. A minimum screening score of 60% is required to qualify for participation.",
  },
  {
    title: "Screening appeals",
    body: "Candidates who are dissatisfied with their screening score may submit an appeal within 24 hours of the publication of screening results.",
  },
  {
    title: "False information",
    body: "Submission of false or falsified information may result in disqualification.",
  },
  {
    title: "Late / incomplete applications",
    body: "Incomplete or late applications will not be accepted.",
  },
  {
    title: "One position",
    body: "A candidate may contest for only one position.",
  },
  {
    title: "Electoral discipline",
    body: "Breaches of election rules may result in warnings, suspension of campaigning, disqualification or referral to the Student Disciplinary Committee, depending on the nature of the breach.",
  },
  {
    title: "Ties",
    body: "If candidates tie for the highest number of votes, a run-off will be held between them. If the run-off also ends in a tie, the matter will be referred to the Head of Department for direction.",
  },
];

// ------------------------------------------------------------
// COMPLAINTS
// ------------------------------------------------------------
export const complaints = {
  text: "Candidates who are dissatisfied with their screening score may appeal within 24 hours of the publication of screening results. Candidates who wish to challenge the conduct or outcome of the election may submit a written complaint to the Electoral Committee within 24 hours of the announcement of the provisional results.",
  buttonLabel: "SUBMIT A COMPLAINT",
};

// ------------------------------------------------------------
// RESULTS
// ------------------------------------------------------------
// To publish results, add objects like this to the array:
// { position: "President", candidate: "Full Name", votes: "312" }
export const results = []; // Published after the election process is complete.

export const resultsPlaceholder =
  "Official election results will be published here following the completion of the election process and consideration of any eligible complaints.";

// ------------------------------------------------------------
// FAQ (accordion)
// ------------------------------------------------------------
export const faqs = [
  {
    q: "Who can vote?",
    a: "All duly registered IR students from 100–400 Level.",
  },
  {
    q: "How do I vote — is voting online?",
    a: "No. Voting is conducted offline (in person) on Election Day, 13 October 2026, at the venue announced by the Electoral Committee. There is no online voting link.",
  },
  {
    q: "Who can contest?",
    a: "Students who meet the stated eligibility requirements for their desired position.",
  },
  {
    q: "Where and when do I buy my form?",
    a: "Forms go on sale on 23 September 2026 and close on 30 September 2026 at 11:59 PM. Buy from any member of the Electoral Committee listed on this website, and pay only into the official account communicated by the Committee.",
  },
  {
    q: "Can I contest for more than one position?",
    a: "No. Each candidate may apply for only one position.",
  },
  {
    q: "When does campaigning begin?",
    a: "Campaigning begins on 5 October 2026, after the official screening results are announced. Campaigning before then is prohibited.",
  },
  {
    q: "When does campaigning end?",
    a: "11:59 PM on 12 October 2026.",
  },
  {
    q: "What happens if there is a tie?",
    a: "A run-off will be held between the candidates tied for the highest number of votes.",
  },
  {
    q: "How can I submit a complaint or appeal a screening score?",
    a: "Appeals against screening scores must be submitted within 24 hours of the publication of results. Written election complaints must be submitted to the Electoral Committee within 24 hours of the announcement of provisional results.",
  },
  {
    q: "Where will the official results be published?",
    a: "On this website.",
  },
];

// ------------------------------------------------------------
// ELECTION COMMITTEE
// ------------------------------------------------------------
// To update a member, edit the entry below. Drop a photo in
// /public/committee/ and set "photo" to "/committee/name.jpg".
// One placeholder photo is currently used for all five members.
// ------------------------------------------------------------
export const committee = {
  heading: "2026/2027 IRSA ELECTORAL COMMITTEE",
  blurb:
    "The 2026/2027 IRSA Election is administered by the Electoral Committee below, under the supervision of the IRSA Adviser. Contact any member to purchase your form.",
  members: [
    {
      name: "Obi Sean",
      role: "Electoral Chairman",
      level: "400 Level",
      phone: "0706 704 1117",
      photo: "/committee-sean.jpg",
    },
    {
      name: "Thomas Zion",
      role: "Electoral Secretary",
      level: "300 Level",
      phone: "0916 402 1253",
      photo: "/committee-zion.jpg",
    },
    {
      name: "Ose-Odogbo Flouris",
      role: "Electoral Committee Member",
      level: "400 Level",
      phone: "0913 114 8262",
      photo: "/committee-flourish.jpg",
    },
    {
      name: "Omaghomi Alero Lily",
      role: "Electoral Committee Member",
      level: "400 Level",
      phone: "0909 157 0392",
      photo: "/committee-Alero.jpg",
    },
    {
      name: "Munir Sethh", // 
      role: "Electoral Committee Member",
      level: "300 Level",
      phone: "0705 395 1739",
      photo: "/committee-seth.jpg",
    },
  ],
  contact:
    "Obi Sean — 0706 704 1117 | Thomas Zion — 0916 402 1253",
};

export const footerNote =
  "This website serves as the official information portal for the 2026/2027 IRSA Election. Students are encouraged to rely on official information published here and announcements from the Electoral Committee. Non-compliance with the electoral guidelines may result in disqualification.";
