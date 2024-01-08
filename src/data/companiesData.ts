export type Company = {
  name: string;
  role: string;
  dates: [string, string];
  accomplishments: string[];
};

const companies: Company[] = [
  {
    name: "Buffalo Bayou Funds",
    role: "Director",
    dates: ["02/2021", "Current"],
    accomplishments: [
      "18% subscription increase",
      "Tech upgrade",
      "Tech debt reduction",
      "Manage 3 teams"
    ],
  },
  {
    name: "Cox Enterprises Inc.",
    role: "FE Lead",
    dates: ["03/2019", "02/2021"],
    accomplishments: [
      "Raise conversion rates by 11%",
      "60% FCP improvement",
      "API Portal launch",
    ],
  },
  {
    name: "E9 Labs",
    role: "Engineer",
    dates: ["01/2018", "03/2019"],
    accomplishments: [
      "Slashing response time by 75%",
      " Real-time chat",
      "Chat history",
    ],
  },
  {
    name: "Emerson Electric",
    role: "Analyst",
    dates: ["07/2015", "09/2017"],
    accomplishments: [
      "Spreadsheet automation",
      "Tech upgrade",
      "Expense reduction",
    ],
  },
];

export default companies;
