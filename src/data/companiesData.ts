export type Company = {
  name: string;
  role: string;
  dates: [string, string];
  accomplishments: string[];
};

const companies: Company[] = [
  {
    name: "Buffalo Bayou Funds",
    role: "Software Engineer",
    dates: ["02/2021", "08/2023"],
    accomplishments: [
      "18% subscripition increase",
      "Tech upgrade",
      "Tech debt reduction",
    ],
  },
  {
    name: "Cox Enterprises Inc.",
    role: "Software Engineer",
    dates: ["03/2019", "02/2021"],
    accomplishments: [
      "Raise conversion rates by 11%",
      "FCP improvement",
      "API Portal launch",
    ],
  },
  {
    name: "E9 Labs",
    role: "Software Engineer",
    dates: ["01/2019", "03/2019"],
    accomplishments: [
      "Slashing response time by 75%",
      " Real-time chat",
      "Chat history",
    ],
  },
  {
    name: "Emerson Electric",
    role: "Analyst",
    dates: ["05/2015", "08/2017"],
    accomplishments: [
      "Spreadsheet automation",
      "Tech upgrade",
      "Expense reduction",
    ],
  },
];

export default companies;
