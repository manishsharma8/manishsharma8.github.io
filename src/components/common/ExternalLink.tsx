import Link from "next/link";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  ariaLabel,
}) => {
  return (
    <Link
      href={href}
      className="external-link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ariaLabel || children} (opens in a new tab)`}
    >
      {children}
    </Link>
  );
};

export default ExternalLink;