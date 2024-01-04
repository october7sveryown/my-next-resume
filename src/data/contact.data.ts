import {
  faSquarePhone,
  faSquareEnvelope,
  faLocationDot,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export type Type = "email" | "phone" | "text" | "link";

interface BaseContact {
  type: "phone" | "text" | "email";
  icon: IconDefinition;
  value: string;
}

interface LinkContact extends Omit<BaseContact, "type"> {
  type: "link";
  href: string;
}

export type ContactType = BaseContact | LinkContact;

export const contactData: ContactType[] = [
  {
    type: "email",
    icon: faSquareEnvelope,
    value: "yashthaker.777@gmail.com",
  },
  {
    type: "phone",
    icon: faSquarePhone,
    value: "+1 437 313 2772",
  },
  {
    type: "link",
    icon: faSquareGithub,
    value: "github.com/october7sveryown",
    href: "https://github.com/october7sveryown",
  },
  {
    type: "link",
    icon: faLinkedin,
    value: "linkedin.com/in/yash-thaker",
    href: "https://www.linkedin.com/in/yash-thaker/",
  },
];
