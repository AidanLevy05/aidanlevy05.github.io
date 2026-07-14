import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { person, siteUrl } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${person.name} | Systems, HPC, and DoD Test & Evaluation`,
  description: person.metaDescription,
  keywords: [
    "Aidan Levy",
    "Computer Science",
    "Data Science",
    "systems programming",
    "high performance computing",
    "HPC",
    "MPI",
    "OpenMP",
    "DoD test and evaluation",
    "ROS 2",
    "robotics",
    "C",
    "Linux",
    "Salisbury University",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${person.name} | Systems, HPC, and DoD Test & Evaluation`,
    description: person.metaDescription,
    siteName: `${person.name} — Portfolio`,
    images: [{ url: "/AidanLevy.jpeg", width: 800, height: 800, alt: person.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} | Systems, HPC, and DoD Test & Evaluation`,
    description: person.metaDescription,
    images: ["/AidanLevy.jpeg"],
  },
  icons: { icon: "/AidanLevy.jpeg" },
  robots: { index: true, follow: true },
};

// Runs before paint to apply the saved (or system) theme without a flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored || "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
