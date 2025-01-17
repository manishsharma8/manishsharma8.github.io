import { Route } from "next";
import { Icon } from "@phosphor-icons/react";
import { StaticImageData } from "next/image";

interface NavLink {
  name: string;
  href: Route;
  section: 'about' | 'experience' | 'projects'
}

interface SocialLink {
  Icon: Icon;
  link: string;
  ariaLabel?: string;
}

interface Experience {
  period: string;
  role: string;
  company: {
    name: string;
    website: Route;
  };
  description: string;
  technologies: string[];
}

interface Project {
  image: StaticImageData;
  title: string;
  website: Route;
  description: string;
  technologies: string[],
}

export type { NavLink, SocialLink, Experience, Project };
