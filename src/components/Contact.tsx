import { Section } from "@/components/ui/Section";
import { person } from "@/data/content";

export function Contact() {
  const links = [
    { label: "Email", value: person.email, href: `mailto:${person.email}`, external: false },
    { label: "GitHub", value: person.githubHandle, href: person.github, external: true },
    { label: "LinkedIn", value: person.linkedinHandle, href: person.linkedin, external: true },
  ];

  return (
    <Section
      id="contact"
      kicker="Contact"
      heading="Get in touch"
      subtitle="Open to systems, HPC, DSP, and defense-adjacent software opportunities."
    >
      <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center justify-between gap-4 bg-surface px-6 py-4 transition-colors hover:bg-surface-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
                {link.label}
              </span>
              <span className="text-sm text-fg transition-colors group-hover:text-accent">
                {link.value}
                <span aria-hidden="true"> ↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
