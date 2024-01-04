import { Content } from "@src/@types/common";

export interface School {
  name: string;
  url?: string;
}

export interface Period {
  start: string;
  end: string; // future date if in progress
}

export interface Education {
  degree: string;
  school: School;
  period: Period;
  details?: Content[];
}

export const educationData: Education[] = [
  {
    degree: "B.Tech in Computer Engineering",
    school: {
      name: "Gujarat Technological University, India",
    },
    period: {
      start: "2016",
      end: "2019",
    },
    details: [
      {
        type: "paragraph",
        value: "WES / Canadian equivalency : 4-year degree",
      },
    ],
  },
  {
    degree: "Diploma in Computer Engineering",
    school: {
      name: "Nirma University, India",
    },
    period: {
      start: "2013",
      end: "2016",
    },
    details: [
      {
        type: "paragraph",
        value: "WES / Canadian equivalency : 3-year degree",
      },
    ],
  },
];
