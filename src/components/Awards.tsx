import { Section } from "@/components/ui/Section";
import { awards } from "@/data/content";

export function Awards() {
  return (
    <Section id="awards" kicker="Honors & Awards" heading="Recognition">
      <ul className="max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
        {awards.map((award) => (
          <li key={award.label} className="flex gap-3">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {award.href ? (
              <a
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 transition-colors hover:text-fg hover:underline"
              >
                {award.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <span>{award.label}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
