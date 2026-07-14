import { person, siteUrl } from "@/data/content";

/** Person structured data for SEO (rendered as a JSON-LD script tag). */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: siteUrl,
    email: `mailto:${person.email}`,
    jobTitle: "Computer Science & Data Science Student",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Salisbury University",
    },
    sameAs: [person.github, person.linkedin],
    knowsAbout: [
      "Systems Programming",
      "High-Performance Computing",
      "Digital Signal Processing",
      "Machine Learning",
      "C",
      "Python",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
