import { NAV_LINKS } from "@/utils/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav hidden lg:block mt-16 w-max">
      <ul>
        {NAV_LINKS.map(({ href, name }) => (
          <li key={name} className="cursor-pointer text-slate-500 hover:text-slate-200">
            <Link href={href}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
