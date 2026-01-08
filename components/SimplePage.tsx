import { Container } from "./Container";

export function SimplePage({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="py-10">
      <Container>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
          <h1 className="font-serif text-3xl font-semibold text-slate-900">{title}</h1>
          <div className="mt-4 prose prose-slate max-w-none">
            {children ?? (
              <p>
                This is a placeholder page for routing. Replace this content with the full template layout when needed.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
