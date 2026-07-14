import { Section } from "@/components/ui/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section
      id="experience"
      kicker="Experience"
      heading="Work with real constraints"
      subtitle="Defense-focused software engineering, robotics research, network engineering, and teaching."
    >
      <div className="space-y-10">
        {experience.map((job) => (
          <article
            key={`${job.org}-${job.role}`}
            className="grid gap-4 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="sm:text-right">
              <p className="font-mono text-xs text-muted">{job.period}</p>
              {job.note ? (
                <p className="mt-1 inline-block rounded-full border border-border px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-accent">
                  {job.note}
                </p>
              ) : null}
            </div>
            <div>
              <h3 className="text-lg font-medium text-fg">{job.role}</h3>
              <p className="text-sm text-accent">{job.org}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((point, i) => (
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
