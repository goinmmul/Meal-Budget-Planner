import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/planner", label: "Planner" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <Link
          href="/"
          className="flex items-center gap-3 font-bold tracking-tight text-[var(--primary-dark)]"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-[var(--primary)] text-sm text-white">
            ₩
          </span>
          <span className="hidden sm:inline">Meal Budget Planner</span>
          <span className="sm:hidden">Meal Planner</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-[#edf4ef] hover:text-[var(--primary-dark)] sm:px-4"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
