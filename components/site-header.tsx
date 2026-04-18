import { Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  links: Array<{ label: string; href: string }>;
};

export function SiteHeader({ links }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(4,8,16,0.72)] backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="my-2 rounded-[1.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.28)] sm:px-4 md:px-5 md:py-3">
          <div className="flex items-center justify-between gap-2 lg:gap-3">
            <a
              href="#hero"
              className="flex min-w-0 items-center gap-2.5 md:gap-3"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(125,249,255,0.35),rgba(1,110,143,0.08))] text-sm font-bold tracking-[0.3em] text-paper md:h-11 md:w-11">
                T
                <span className="absolute inset-1 rounded-2xl border border-white/10" />
              </div>
              <div className="hidden min-w-0 sm:block">
                <p className="truncate font-display text-base leading-none text-paper md:text-lg">
                  Tesserologist
                </p>
                <p className="hidden whitespace-nowrap text-[10px] uppercase tracking-[0.28em] text-paper/50 2xl:block">
                  Navigating dreamers to their next dimension
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-1.5 xl:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-paper/66 transition hover:bg-white/5 hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex xl:gap-3">
              <Badge className="hidden whitespace-nowrap border-white/10 bg-white/[0.04] text-paper/78 2xl:inline-flex">
                Summer 2026 open
              </Badge>
              <Button
                href="#contact"
                className="whitespace-nowrap bg-[linear-gradient(135deg,#7df9ff,#016e8f)] px-4 py-2.5 text-sm text-ink xl:px-5 xl:py-3"
              >
                Find Your Mentor
              </Button>
            </div>

            <details className="relative lg:hidden">
              <summary className="list-none rounded-full border border-white/10 bg-white/[0.05] p-2.5 text-paper/80">
                <Menu className="h-5 w-5" />
              </summary>
              <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-[#08111f] p-3 shadow-glow">
                <div className="space-y-2">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm text-paper/78 transition hover:bg-white/5 hover:text-paper"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button
                    href="#contact"
                    className="mt-2 w-full bg-[linear-gradient(135deg,#7df9ff,#016e8f)] text-ink"
                  >
                    Find Your Mentor
                  </Button>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
