export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  );
}
