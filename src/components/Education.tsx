import { Section } from "@/components/ui/Section";
import { education } from "@/data/content";

export function Education() {
  return (
    <Section id="education" kicker="Education" heading="Academic background">
      <article className="rounded-lg border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium text-fg">{education.school}</h3>
            <p className="mt-1 text-sm text-accent">{education.program}</p>
            <p className="text-sm text-muted">{education.detail}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs text-faint">{education.period}</p>
            <p className="mt-1 text-sm text-fg">
              <span className="text-muted">GPA</span> {education.gpa}
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
            Relevant coursework
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 text-sm text-muted">
            {education.coursework.map((course, i) => (
              <li key={course} className="flex items-center gap-2">
                <span>{course}</span>
                {i < education.coursework.length - 1 ? (
                  <span className="text-faint" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  );
}
