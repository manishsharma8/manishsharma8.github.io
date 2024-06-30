import Link from "next/link";
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { EXPERIENCES } from "@/utils/constants";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="flex flex-col mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ol className="flex flex-col group/list gap-12">
        {EXPERIENCES.map((experience) => (
          <li
            key={`${experience.role}-${experience.company.name}`}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {experience.period}
            </header>
            <div className="z-10 flex flex-col gap-2 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <Link
                  href={experience.company.website}
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                  <span className="flex items-center">
                    {`${experience.role}, ${experience.company.name}`}
                    <ArrowUpRight
                      weight="bold"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px"
                    />
                  </span>
                </Link>
              </h3>
              <p>{experience.description}</p>
              <ul className="flex flex-wrap gap-1.5">
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;