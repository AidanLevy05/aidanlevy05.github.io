import { Container } from "@/components/ui/Container";
import { heroFocus, person } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="pt-16 sm:pt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-accent">{person.name}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {person.clearance.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl md:text-[2.75rem]">
              {person.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {person.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={person.resume}
                className="rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                Download résumé
              </a>
              <a
                href="#projects"
                className="rounded-md border border-border-strong px-4 py-2 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
              >
                View projects
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-fg"
              >
                GitHub
              </a>
              <span className="text-faint" aria-hidden="true">
                /
              </span>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-fg"
              >
                LinkedIn
              </a>
              <span className="text-faint" aria-hidden="true">
                /
              </span>
              <a
                href={`mailto:${person.email}`}
                className="text-muted transition-colors hover:text-fg"
              >
                {person.email}
              </a>
            </div>
          </div>

          <aside
            className="w-full rounded-lg border border-border bg-surface p-6 lg:w-72"
            aria-label="Technical focus"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Focus
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {heroFocus.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
