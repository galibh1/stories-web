import Link from "next/link";
import { Container } from "../components/Container";

export default function NotFound() {
  return (
    <div className="py-16">
      <Container>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 text-center">
          <h1 className="font-serif text-4xl font-semibold">404</h1>
          <p className="mt-3 text-slate-600">The page you’re looking for doesn’t exist.</p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Back home
          </Link>
        </div>
      </Container>
    </div>
  );
}
