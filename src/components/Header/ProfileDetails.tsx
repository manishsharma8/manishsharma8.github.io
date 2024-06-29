import Link from "next/link";

import { PROFILE } from "@/utils/constants";
import Resume from "./Resume";

const ProfileDetails: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        <Link href="/">{PROFILE.name}</Link>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {PROFILE.title}
      </h2>
      <p className="mt-4 max-w-xs leading-normal">{PROFILE.description}</p>
      <Resume />
    </div>
  );
};

export default ProfileDetails;
