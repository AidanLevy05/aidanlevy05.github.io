import { Container } from "./Container";

export function Section({
  id,
  kicker,
  heading,
  subtitle,
  children,
}: {
  id: string;
  kicker: string;
  heading: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-border py-20 sm:py-24"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {kicker}
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
          >
            {heading}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
