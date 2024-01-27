interface Certification {
  name: string;
  year: string;
  credentialUrl?: string;
}

export const certificationsData: Certification[] = [
  {
    name: "Containers & Kubernetes Essentials by IBM",
    year: "2023",
    credentialUrl:
      "https://www.credly.com/badges/b9d9b3b1-e618-480c-929e-f28b7eddab3e/public_url",
  },
  {
    name: "Amazon EKS Knowledge Badge",
    year: "2024",
    credentialUrl:
      "https://www.credly.com/badges/badb8a2f-8bf1-4a2b-82ac-e8aac67dd80c/public_url",
  },
  {
    name: "Java assessment by Hackerrank",
    year: "2023",
    credentialUrl:
      "https://www.hackerrank.com/certificates/93479938e557",
  },
];