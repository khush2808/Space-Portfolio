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
  {
    name: "Codolio",
    src: "/codolio.svg",
    href: "https://codolio.com/profile/khush2808"
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
  // technologies?: string[]; // Commented out - not displayed in UI for now
}

export const experienceData: ExperienceItem[] = [
  {
    role: "SDE Intern",
    company: "HexaWealth",
    period: "Jan 2026 - Present",
    summary: "Hyderabad, Telangana, India · On-site",
    highlights: [
      "Building a wealth advisory and management platform with FastAPI, Azure and React Native",
      "Integrating third party account aggregators APIs such as FinFactor(Finvu) and MFCentral to fetch, sync and manage customer's assets"
    ],
    // technologies: ["FastAPI", "Azure", "React Native", "FinFactor", "MFCentral"]
  },
  {
    role: "SDE Intern",
    company: "Futures First",
    period: "Oct 2025 - Jan 2026",
    summary: "Jaipur, Rajasthan, India · On-site",
    highlights: [
      "Contributed across 3 repositories, merging 20+ pull requests and delivering 10k+ lines of production code across frontend and backend systems",
      "Architected an options and derivatives analysis dashboard using Apache ECharts and MobX, actively used by over 150+ traders",
      "Designed scalable database schemas using Mongoose and built backend APIs in Next.js to persist trading strategies and analytical workflows",
      "Introduced an Nx monorepo architecture, standardizing dependencies and enabling build caching across 15+ dashboards, significantly improving developer productivity"
    ],
    // technologies: ["TypeScript", "Next.js", "MobX", "Nx", "Apache ECharts", "MongoDB"]
  },
  {
    role: "SDE Intern",
    company: "CreditSea",
    period: "Jul 2025 - Sep 2025",
    summary: "Raipur, Chhattisgarh, India · On-site",
    highlights: [
      "Optimized MongoDB queries using aggregation pipelines and bulk writes, improved backend logic across 10+ cron services, reducing API response times by 60%",
      "Engineered automated invoice generation APIs and Excel-based text extraction pipelines, eliminating manual workflows and saving 20+ hours per week for operations teams",
      "Engineered the end-to-end backend architecture for Bharat Bill Payment System (BBPS) integrations, handling high-volume payment APIs and webhooks from Cashfree and Setu (Pine Labs) with robust failure handling and reconciliation",
      "Implemented end-to-end authentication and authorization using RBAC and 2FA, securing LOS-LMS systems with granular access control and improved account security",
      "Built real-time analytics dashboard for loan officers displaying portfolio metrics, default predictions, and collection insights, enabling data-driven decisions"
    ],
    // technologies: ["TypeScript", "Next.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    role: "Full-stack Developer",
    company: "Stealth Startup",
    period: "Jan 2025 - May 2025",
    summary: "Remote",
    highlights: [
      "Built AI-driven customer support agents using Flowise (self-hosted on Azure) helping customers on ecommerce stores, attracting over 150 store-owning clients",
      "Integrated Shopify GraphQL APIs to contextualize AI agents, enhancing recommendation accuracy by 40%",
      "Developed website and Admin Dashboard using Next.js, Express, and MongoDB to manage analytics, billing, and chat histories",
      "Created complex CI/CD pipeline to auto-sync changes across repos and automated app deployment on Shopify's CDN and edge functions, increasing developer productivity by 60%"
    ],
    // technologies: ["Next.js", "Express", "MongoDB", "Flowise", "Azure", "Shopify GraphQL"]
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
    description: "Achieved 4-star on CodeChef."
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
    title: "Harkirat Cohort 2.0",
    description: "Completed the intensive 0-100 web development bootcamp focusing on full-stack development practices."
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

// -------------------- Leadership & Volunteering Data --------------------
export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
}

export const leadershipData: LeadershipItem[] = [
  {
    role: "Community Lead - CP Wing",
    organization: "House of Geeks, IIIT Ranchi",
    period: "Aug 2024 - Aug 2025",
    location: "Ranchi, Jharkhand, India",
    highlights: [
      "Led the Competitive Programming Wing, conducting DSA-focused classes and mentoring students for competitive programming contests",
      "Organized 50+ post-contest analysis sessions/meets to drive peer learning and performance improvement across the community",
      "Organized ICPC-style 5-hour team competitions to simulate real contest environments and enhance collaborative problem-solving skills"
    ]
  }
];
