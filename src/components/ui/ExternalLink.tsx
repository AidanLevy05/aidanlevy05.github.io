import { cn } from "@/lib/cn";

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "text-muted underline-offset-4 transition-colors hover:text-fg hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
