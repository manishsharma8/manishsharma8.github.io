import { Icon } from "@phosphor-icons/react";

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  Icon: Icon;
  link: string;
}

export type { NavLink, SocialLink };
