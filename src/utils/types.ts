import { Route } from "next";
import { Icon } from "@phosphor-icons/react";

interface NavLink {
  name: string;
  href: Route;
  section: 'about' | 'experience' | 'projects'
}

interface SocialLink {
  Icon: Icon;
  link: string;
}

export type { NavLink, SocialLink };
