import ExternalLink from "./common/ExternalLink";

const ABOUT_DESCRIPTION: Array<React.ReactElement> = [
  <>
    Hey there! I&apos;m Manish Sharma, a passionate Software Engineer from
    Gurgaon, India. I thrive on transforming complex challenges into sleek,
    functional solutions.
  </>,
  <>
    Currently, my focus is building accessible client side and admin side user
    interfaces at{' '}
    <ExternalLink href="https://www.scaler.com">Scaler By Interviewbit</ExternalLink>
    , where I&apos;ve developed product tours and collaborated closely with an
    agile team to build new features and improve existing applications.
  </>,
  <>
    When I&apos;m not coding, you&apos;ll find me listing to music, reading
    books or indulging in my secret hobby—trying to perfect the ultimate pancake
    flip (still a work in progress!). I&apos;m always on the lookout for the
    next big thing in tech and love experimenting with new ideas.
  </>,
];

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 gap-4"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      {ABOUT_DESCRIPTION.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
    </section>
  );
};

export default About;
