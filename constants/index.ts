// export const Skill_data = [
//     {
//       skill_name: "Html 5",
//       Image: "/html.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Css",
//       Image: "/css.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Java Script",
//       Image: "/js.png",
//       width: 65,
//       height: 65,
//     },
//     {
//       skill_name: "Tailwind Css",
//       Image: "/tailwind.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "React",
//       Image: "/react.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Redux",
//       Image: "/redux.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "React Query",
//       Image: "/reactquery.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Type Script",
//       Image: "/ts.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Next js 13",
//       Image: "/next.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Framer Motion",
//       Image: "/framer.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Stripe Payment",
//       Image: "/stripe.webp",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Node js",
//       Image: "/node-js.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Mongo db",
//       Image: "/mongodb.png",
//       width: 40,
//       height: 40,
//     },
  
//   ];
  
export const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    href: 'https://www.linkedin.com/in/khush2808/',
  },
  {
    name: "Github",
    src: "/github.svg",
    href:'https://github.com/khush2808',

  },
  {
    name: "Leetcode",
    src: "/leetcode.svg",
    href:"https://leetcode.com/u/khushicpc/"
  },
  {
    name: "Codeforces",
    src: "/codeforces_logo.jpg",
    href: "https://codeforces.com/profile/khush2808"
  },
  {
    name: "CodeChef",
    src: "/codechef_logo.png",
    href: "https://www.codechef.com/users/khush2808"
  },
];



export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    Image: "/reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: "/Firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Postger SQL",
    Image: "/postger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    Image: "/prisma.webp",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    Image: "/graphql.png",
    width: 80,
    height: 80,
  },
];

export const Full_stack = [
  {
    skill_name: "React Native",
    Image: "/ReactNative .png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    Image: "/python.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },

];



export const Other_skill = [
  {
    skill_name: "java",
    Image: "/java.svg",
    width: 60,
    height: 60,
  },
];

// -------------------- Resume / Experience Data --------------------
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "SDE Intern",
    company: "Futures First",
    period: "Oct 2025 - Dec 2025",
    summary: "Worked on trading dashboards and options analysis tools for a quantitative trading firm.",
    highlights: [
      "Implementing an options analysis dashboard with Next.js, Apache ECharts, and MobX for state management",
      "Working on saving and viewing trading strategies and handling backend design (DB design + APIs)",
      "Implementing Next.js custom server patterns",
      "Implemented Nx monorepos in a repo with over 15 dashboards to manage dependencies and cache deployments"
    ]
  },
  {
    role: "SDE Intern",
    company: "CreditSea",
    period: "Jul 2025 - Oct 2025",
    summary: "Optimized backend systems and built analytics dashboards for a lending platform.",
    highlights: [
      "Optimized database queries with aggregation pipelines and bulkwrites, reducing API response times by 60%",
      "Built real-time analytics dashboard for loan officers with portfolio metrics and default predictions",
      "Implemented 2FA and security features across LOS-LMS authentication systems",
      "Developed automated invoice generation APIs and Excel text-extraction pipelines saving 20+ hrs/week",
      "Implemented complete backend API integration for BharatBillPaySystem"
    ]
  },
  {
    role: "Full-stack Developer",
    company: "Stealth Startup",
    period: "Jan 2025 - May 2025",
    summary: "Built AI-driven customer support agents for e-commerce stores.",
    highlights: [
      "Built AI-driven customer support agents using Flowise (self-hosted on Azure) serving 150+ store clients",
      "Integrated Shopify GraphQL APIs to contextualize AI agents, enhancing recommendation accuracy by 40%",
      "Developed website and Admin Dashboard using Next.js, Express, and MongoDB",
      "Created complex CI/CD pipeline for auto-sync across repos, increasing developer productivity by 60%"
    ]
  },
  {
    role: "Community Lead - CP Wing",
    company: "House of Geeks, IIIT Ranchi",
    period: "Aug 2024 - Aug 2025",
    summary: "Led the competitive programming wing of the technical society.",
    highlights: [
      "Head of Competitive Programming Wing",
      "Responsible for growing CP culture in college and encouraging students to learn DSA and participate in contests"
    ]
  }
];

export interface AchievementItem {
  title: string;
  description: string;
}

export const achievementData: AchievementItem[] = [
  {
    title: "ICPC Regionalist 2024 - AIR 48",
    description: "Competed at Amritapuri and Chennai Regionals, achieving the best-ever college rank of 48."
  },
  {
    title: "CodeChef Global Ranks 41, 47, 54",
    description: "Secured top global ranks in CodeChef Starters contests among 25,000+ participants."
  },
  {
    title: "Expert on Codeforces (1606)",
    description: "Top 0.5% on Codeforces with Expert rating."
  },
  {
    title: "Knight on LeetCode (2005)",
    description: "Top 2% in LeetCode contests with Knight Badge."
  },
  {
    title: "4★ on CodeChef (1982)",
    description: "Achieved 4-star rating on CodeChef."
  },
  {
    title: "CodeStudio Global Ranks 2 & 3",
    description: "Secured Global Rank 2 and 3 in CodeStudio Weekly Contests 142 and 120."
  },
  {
    title: "2000+ Problems Solved",
    description: "Solved 2000+ algorithmic problems across LeetCode, Codeforces, and GeeksforGeeks."
  },
  {
    title: "CP Wing Lead @ House of Geeks",
    description: "Led the CP Wing at IIIT Ranchi, conducting DSA classes, mentoring students, and organizing 50+ post-contest analysis sessions."
  }
];

// -------------------- Education Data --------------------
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology - BTech, Computer Science",
    institution: "Indian Institute of Information Technology Ranchi",
    period: "Nov 2022 - Apr 2026",
    description: "ICPC Regionalist, Head of Competitive Programming Wing"
  },
  {
    degree: "Grade 12th, Computer Science",
    institution: "Jay Jalaram International School",
    period: "Jul 2020 - Mar 2022"
  }
];
