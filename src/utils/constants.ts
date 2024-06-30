import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { NavLink, SocialLink } from "./types";

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
