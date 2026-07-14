import { Section } from "@/components/ui/Section";
import { research } from "@/data/content";

export function Research() {
  return (
    <Section
      id="research"
      kicker="Research"
      heading="Undergraduate research"
      subtitle="An honors thesis on conversational AI and wellbeing, plus signal processing and AI-policy work."
    >
      <div className="space-y-10">
        {research.map((entry) => (
          <article
            key={entry.role}
            className="grid gap-4 sm:grid-cols-[12rem_1fr] sm:gap-8"
          >
            <div className="sm:text-right">
              <p className="font-mono text-xs text-muted">{entry.period}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-fg">{entry.role}</h3>
              <p className="text-sm text-accent">{entry.org}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {entry.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
