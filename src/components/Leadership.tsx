import { Section } from "@/components/ui/Section";
import { leadership } from "@/data/content";

export function Leadership() {
  return (
    <Section
      id="leadership"
      kicker="Leadership"
      heading="Building and teaching"
      subtitle="Running a business, leading a club, and years of disciplined training outside of engineering."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {leadership.map((entry) => (
          <article
            key={`${entry.org}-${entry.role}`}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-medium text-fg">{entry.role}</h3>
              <p className="font-mono text-xs text-faint">{entry.period}</p>
            </div>
            <p className="mt-1 text-sm text-accent">
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
                >
                  {entry.org}
                  <span aria-hidden="true"> ↗</span>
                </a>
              ) : (
                entry.org
              )}
            </p>
            {entry.description ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
