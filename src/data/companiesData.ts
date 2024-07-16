export type Company = {
  name: string;
  role: string;
  dates: [string, string];
  accomplishments: string[];
};

const companies: Company[] = [
  {
    name: "Swift Sage AI",
    role: "Engineer",
    dates: ["01/2024", "Current"],
    accomplishments: [
      "A.I. Driven Analytics",
      "Architect and Deploy",
      "Data Automation",
    ],
  },  {
    name: "Almond Cow",
    role: "Engineer",
    dates: ["10/2023", "01/2024"],
    accomplishments: [
      "GPT-4 Implementation",
      "Boost Margins By 6%",
      "Increase Web Traffic by 8.58%",
    ],
  },
  {
    name: "Buffalo Bayou Funds",
    role: "Engineer",
    dates: ["02/2021", "09/2023"],
    accomplishments: [
      "18% subscription increase",
      "Tech upgrade",
      "Tech debt reduction",
    ],
  },
  {
    name: "Cox Enterprises Inc.",
    role: "Engineer",
    dates: ["03/2019", "02/2021"],
    accomplishments: [
      "Raise conversion rates by 11%",
      "60% FCP improvement",
      "API Portal launch",
    ],
  },
];

export default companies;
