export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Brent Miller",
    role: "Chief Innovation Officer",
    bio: "A golf industry veteran with over 15 years of experience in golf technology and operations. Brent founded GolfBack to help golf courses take back control of their revenue and customer relationships from third-party aggregators.",
  },
  {
    name: "Bryce Voisin",
    role: "Chief Revenue Officer",
    bio: "With deep expertise in SaaS revenue strategy and golf industry partnerships, Bryce leads GolfBack's growth initiatives and helps courses across the country maximize their direct booking revenue.",
  },
];
