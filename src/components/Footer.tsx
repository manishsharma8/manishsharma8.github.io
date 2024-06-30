import ExternalLink from "./common/ExternalLink";

const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 opacity-60">
      <p>
        Built with{' '}
        <ExternalLink href="https://www.nextjs.org">Next.js</ExternalLink> and{' '}
        <ExternalLink href="https://www.tailwindcss.com">
          Tailwind CSS
        </ExternalLink>
        . Deployed with{' '}
        <ExternalLink href="https://github.com/features/actions">
          Github Actions
        </ExternalLink>{' '}
        on <ExternalLink href="https://pages.github.com/">Pages</ExternalLink>.
        Inspiration from{' '}
        <ExternalLink href="https://brittanychiang.com/">
          Brittany Chiang
        </ExternalLink>
      </p>
    </footer>
  );
};

export default Footer;
