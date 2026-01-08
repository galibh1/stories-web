import Link from "next/link";
import { Container } from "../Container";

export function SiteFooterHome3() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-800">
              About me
            </h3>
            <div className="mt-3 h-px w-[120px] bg-slate-200">
              <div className="h-px w-[40px] bg-slate-900" />
            </div>

            <p className="mt-7 max-w-xs text-sm leading-6 text-slate-600">
              Start writing, no matter what. The water does not flow until the faucet is turned on.
            </p>

            <div className="mt-7">
              <p className="text-sm font-bold text-slate-900">Address</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                123 Main Street
                <br />
                New York, NY 10001
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm font-bold text-slate-900">Follow me</p>
              <div className="mt-3 flex items-center gap-3">
                <Link href="#" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
                <Link href="#" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                  <i className="fa-brands fa-twitter" />
                </Link>
                <Link href="#" className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                  <i className="fa-brands fa-pinterest-p" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-800">Quick Link</h3>
            <div className="mt-3 h-px w-[120px] bg-slate-200">
              <div className="h-px w-[40px] bg-slate-900" />
            </div>

            <div className="mt-7 space-y-3 text-sm font-semibold text-slate-600">
              <Link href="/about" className="block hover:text-slate-900">About me</Link>
              <Link href="/contact" className="block hover:text-slate-900">Help &amp; Support</Link>
              <Link href="/typography" className="block hover:text-slate-900">Licensing Policy</Link>
              <Link href="/typography" className="block hover:text-slate-900">Refund Policy</Link>
              <Link href="/contact" className="block hover:text-slate-900">Hire me</Link>
              <Link href="/contact" className="block hover:text-slate-900">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-800">Tagcloud</h3>
            <div className="mt-3 h-px w-[120px] bg-slate-200">
              <div className="h-px w-[40px] bg-slate-900" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Beautiful", "New York", "Droll", "Intimate", "Loving", "Travel", "Fighting"].map((t) => (
                <Link
                  key={t}
                  href="/category/grid"
                  className="rounded-full border border-[var(--border)] bg-white px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-800">Newsletter</h3>
            <div className="mt-3 h-px w-[120px] bg-slate-200">
              <div className="h-px w-[40px] bg-slate-900" />
            </div>

            <p className="mt-7 max-w-sm text-sm leading-6 text-slate-600">
              Subscribe to our newsletter and get our newest updates right on your inbox.
            </p>

            <div className="mt-6 flex overflow-hidden rounded-full border border-[var(--border)] bg-white shadow-soft">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-6 py-4 text-sm outline-none"
              />
              <button className="bg-[var(--brand)] px-8 text-sm font-semibold text-white hover:brightness-95">
                Subscribe
              </button>
            </div>

            <label className="mt-4 flex items-center gap-3 text-sm text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
              I agree to the terms &amp; conditions
            </label>
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-8 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2020, Stories - Personal Blog HTML Template</p>
            <p>Design by AliThemes | All rights reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
