import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Experience, NavLink, SocialLink } from "./types";

export const PROFILE = {
  name: "Manish Sharma",
  title: "Software Engineer",
  description: "I build pixel-perfect, engaging, and accessible digital experiences.",
} as const;

export const NAV_LINKS: NavLink[] = [
  { name: "About", href: "#about", section: "about" },
  { name: "Experience", href: "#experience", section: 'experience' },
  { name: "Projects", href: "#projects", section: "projects" },
];

export const SOCIALS: SocialLink[] = [
  {
    Icon: LinkedinLogo,
    ariaLabel: 'Linkedin',
    link: 'https://www.linkedin.com/in/manishsharma8301/',
  },
  {
    Icon: GithubLogo,
    ariaLabel: 'Github',
    link: 'https://github.com/manishsharma8',
  },
  {
    Icon: XLogo,
    ariaLabel: 'Twitter',
    link: 'https://twitter.com/manish832001',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: 'Jun 2023 - Present',
    role: 'Software Engineer',
    company: {
      name: 'Scaler / Interviewbit',
      website: 'https://www.scaler.com',
    },
    description: `Develop and maintain critical components across various products.
      Contributed to the creation of an in-house design system, enhancing cohesiveness
      between development and design teams. Led the development of a Resume Builder
      for learners, significantly increasing shortlisting rates.`,
    technologies: [
      'React',
      'Typescript',
      'Next.js',
      'Redux',
      'Ruby on Rails',
      'Storybook',
      'Mixpanel',
    ],
  },
  {
    period: 'Jun 2022 - Jun 2023',
    role: 'Software Engineer Intern',
    company: {
      name: 'Scaler / Interviewbit',
      website: 'https://www.scaler.com',
    },
    description: `Revamped the legacy careers and recruiters platform, significantly
      improving UX and load times, resulting in increased DAU and reduced support tickets.
      Collaborated with cross-functional teams to implement multiple dynamic and
      browser-compatible pages.`,
    technologies: ['React', 'Redux', 'Ruby on Rails', 'Mixpanel'],
  },
  {
    period: 'Dec 2021 - Feb 2022',
    role: 'Junior Software Engineer',
    company: {
      name: 'Mission Mentor',
      website: 'https://www.linkedin.com/company/mentorlabsxyz/',
    },
    description: `Led data collection and analysis using Mixpanel Analytics,
      A/B testing, and feature toggles, enhancing customer acquisition. Utilized
      Scrum methodology to manage project backlogs, achieving an early beta release
      and expanding the waitlist from 0 to 16,000 members in one month.`,
    technologies: ['Spring Boot', 'React', 'Typescript', 'Mixpanel'],
  },
];
