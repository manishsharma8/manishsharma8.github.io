import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const Resume: React.FC = () => {
  return (
    <Link
      href="./resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex text-lg items-center group mt-10 text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 font-semibold"
    >
      View Full Resume
      <ArrowUpRight
        weight="bold"
        className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
      />
    </Link>
  );
};

export default Resume;
