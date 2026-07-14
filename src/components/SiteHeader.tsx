"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navItems, person } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="font-mono text-sm font-medium tracking-tight text-fg"
            aria-label={`${person.name} — top of page`}
          >
            aidan<span className="text-accent">levy</span>
          </a>

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={person.resume}
              className="hidden rounded-md border border-border-strong px-3 py-1.5 text-sm text-fg transition-colors hover:border-accent hover:text-accent sm:inline-block"
            >
              Résumé
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-fg md:hidden"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-bg md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={person.resume}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-accent"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
