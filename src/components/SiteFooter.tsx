import { Container } from "@/components/ui/Container";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { person } from "@/data/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            &copy; {year} {person.name}
          </p>
          <div className="flex items-center gap-5">
            <ExternalLink href={person.github}>GitHub</ExternalLink>
            <ExternalLink href={person.linkedin}>LinkedIn</ExternalLink>
            <a
              href={`mailto:${person.email}`}
              className="underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
