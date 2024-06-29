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
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export const SOCIALS: SocialLink[] = [
  {
    Icon: LinkedinLogo,
    link: "https://www.linkedin.com/in/manishsharma8301/",
  },
  {
    Icon: GithubLogo,
    link: "https://github.com/manishsharma8",
  },
  {
    Icon: XLogo,
    link: "https://x.com/manish832001",
  },
];
