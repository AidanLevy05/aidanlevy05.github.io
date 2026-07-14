import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section
      id="projects"
      kicker="Projects"
      heading="Selected work"
      subtitle="Projects that need explicit control over performance, data movement, and system behavior."
    >
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
                  {project.type}
                </p>
                <h3 className="mt-1.5 text-xl font-medium text-fg">
                  {project.name}
                </h3>
              </div>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-sm text-muted transition-colors hover:text-accent"
                  aria-label={`${project.name} on GitHub`}
                >
                  GitHub ↗
                </a>
              ) : null}
            </div>

            <p className="mt-4 text-base leading-relaxed text-muted">
              {project.summary}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>

            <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm leading-relaxed text-muted">
              {project.points.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-faint"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
