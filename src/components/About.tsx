import { Section } from "@/components/ui/Section";
import { about } from "@/data/content";

export function About() {
  return (
    <Section id="about" kicker="About" heading="Close to the machine">
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
