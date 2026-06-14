import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Enter your budget",
    text: "Add your total food budget and what you have already spent.",
  },
  {
    number: "02",
    title: "Set your meal plan",
    text: "Tell us how many meals are left and choose a meal style.",
  },
  {
    number: "03",
    title: "Get a realistic strategy",
    text: "See your per-meal limit, budget status, and three practical ideas.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#bfd4c6] bg-[#edf7f0] px-4 py-2 text-sm font-bold text-[var(--primary)]">
            Built for student budgets
          </p>
          <h1 className="max-w-3xl text-5xl leading-[1.06] font-black tracking-[-0.04em] text-[var(--primary-dark)] sm:text-6xl">
            Make every meal fit your budget.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Know how much you can spend before your next meal. Turn a limited
            daily or weekly food budget into a clear, realistic plan.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/planner"
              className="rounded-full bg-[var(--primary)] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[var(--primary-dark)]"
            >
              Plan my meals
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[var(--line)] bg-white px-6 py-3.5 font-bold text-[var(--primary-dark)] transition hover:border-[#abc5b4]"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -top-7 -right-5 size-28 rounded-full bg-[var(--accent)]/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8e2da] bg-white p-7 shadow-2xl shadow-green-950/10">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-5">
              <div>
                <p className="text-sm font-semibold text-[var(--muted)]">
                  Today&apos;s meal budget
                </p>
                <p className="mt-1 text-3xl font-black text-[var(--primary-dark)]">
                  ₩24,000
                </p>
              </div>
              <span className="rounded-full bg-[#e7f5eb] px-3 py-1.5 text-xs font-bold text-[var(--primary)]">
                ON TRACK
              </span>
            </div>
            <div className="py-6">
              <div className="mb-3 flex justify-between text-sm">
                <span className="font-semibold">Spent ₩8,000</span>
                <span className="text-[var(--muted)]">₩16,000 left</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#e9eee9]">
                <div className="h-full w-1/3 rounded-full bg-[var(--primary)]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#f3f7f3] p-4">
                <p className="text-xs font-bold tracking-wide text-[var(--muted)] uppercase">
                  Meals left
                </p>
                <p className="mt-2 text-2xl font-black">2</p>
              </div>
              <div className="rounded-2xl bg-[#fff8e9] p-4">
                <p className="text-xs font-bold tracking-wide text-[#82621d] uppercase">
                  Per meal
                </p>
                <p className="mt-2 text-2xl font-black">₩8,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--primary-dark)] px-5 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.18em] text-[#a8d5b8] uppercase">
            How it works
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">
            A useful answer in three quick steps.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-white/15 bg-white/7 p-6"
              >
                <p className="text-sm font-black text-[var(--accent)]">
                  {step.number}
                </p>
                <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#cbd9d0]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
