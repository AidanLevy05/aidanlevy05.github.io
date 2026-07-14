import { Section } from "@/components/ui/Section";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <Section id="skills" kicker="Skills" heading="Tools and domains">
      <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.label}>
            <dt className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
              {group.label}
            </dt>
            <dd className="mt-3">
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-fg">
                {group.items.map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    <span>{item}</span>
                    {i < group.items.length - 1 ? (
                      <span className="text-faint" aria-hidden="true">
                        ·
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
