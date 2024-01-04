import { Content } from "@src/@types/common";

export interface Company {
  name: string;
  url: string;
}

export interface Period {
  start: string;
  end?: string;
}

export interface Position {
  title: string;
  company: Company;
  period: Period;
  details?: Content[];
}

export const workExperienceData: Position[] = [
  {
    title: "Full-Stack Developer (Senior Executive - Technology)",
    company: {
      name: "MCX, India (India's largest commodity exchange)",
      url: "https://www.mcxindia.com/",
    },
    period: {
      start: "June 2020",
      end: "Aug 2023",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Implemented an application (from conceptualization to deployment) which transformed traditional offline processes to online",
      },
      {
        type: "list",
        items: [
          "Collaborated with stakeholders to understand the existing offline processes",
          "Implemented features like Auth, Role-based access, 3-step application process, validation of digitally signed documents & verification of another 10+ business parameters",
          "Mentored a junior dev & participated in code review sessions",
          "Seamlessly migrated the application from old infrastracture (as CentOS 8 reached EOF) to RHEL based servers",
          "Implemented reverse proxy using nginx for enhanced security",
          "Actively involved in maintenance & resolution of vulnerabilites / defects in the application",
          "Key person for maintaining code documentation and versioning",
          "Received an average performance rating of 5.3/6 during my tenure of 4 years (highest among the team)"
        ],
      },
      {
        type: "tags",
        items: [
          "Java",
          "Spring Boot",
          "MySQL",
          "JUnit",
          "Test Containers",
          "Angular",
          "nginx",
          "Hibernate",
          "Lombok",
          "Postman",
          "Bitbucket",
          "Jira",
        ],
      },
    ],
  },
  {
    title: "Front-end Developer (Management Trainee - Technology)",
    company: {
      name: "MCX, India (India's largest commodity exchange)",
      url: "https://www.mcxindia.com",
    },
    period: {
      start: "Jun 2019",
      end: "May 2020",
    },
    details: [
      {
        type: "paragraph",
        value:
          "Key front-end developer in a team of 2 members",
      },
      {
        type: "list",
        items: [
          "Created 30+ Angular components & services for implementing various features like login, CRUD & Dashboard",
          "Used Bootstrap, Nebular UI & ag-grid to design and develop the UI components",
          "Utilized RxJS for state management within application",
          "Completed front-end development of the application within a highly prioritised deadline",
          "Received appreciation from CTO for completing development on stipulated timeline",
        ],
      },
      {
        type: "tags",
        items: [
          "Angular",
          "TypeScript",
          "NebularUI",
          "ag-grid",
          "RxJS",
          "HTML5",
          "CSS3"
        ],
      },
    ],
  },
];
