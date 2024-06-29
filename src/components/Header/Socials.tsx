import { SOCIALS } from "@/utils/constants";
import Link from "next/link";

const Socials = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center gap-5">
      {SOCIALS.map(({ Icon, link }) => (
        <li key={link} className="shrink-0 group">
          <Link href={link}>
            <Icon className="w-7 h-7 group-hover:hidden" />
            <Icon className="hidden group-hover:block w-7 h-7" weight="duotone" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
