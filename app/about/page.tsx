import Link from "next/link";

const details = [
  {
    title: "Target users",
    text: "University students who manage a limited daily or weekly food allowance and want a quick spending guide.",
  },
  {
    title: "Project purpose",
    text: "Turn a few simple budget inputs into an understandable meal allowance and practical next-step strategy.",
  },
  {
    title: "Technology",
    text: "Built with Next.js, TypeScript, and Tailwind CSS. All calculations and meal data stay in the browser.",
  },
];

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="text-sm font-black tracking-[0.16em] text-[var(--primary)] uppercase">
            About the project
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight font-black tracking-tight text-[var(--primary-dark)] sm:text-6xl">
            A clearer way to make everyday meal decisions.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Campus Meal Budget Planner is an educational web service that helps
            students understand what they can realistically spend across their
            remaining meals.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {details.map((detail, index) => (
            <article
              key={detail.title}
              className="rounded-3xl border border-[var(--line)] bg-white p-7"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-[#edf5ef] text-sm font-black text-[var(--primary)]">
                {index + 1}
              </span>
              <h2 className="mt-7 text-xl font-black text-[var(--primary-dark)]">
                {detail.title}
              </h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                {detail.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] bg-[#fff3d7] px-6 py-10 sm:flex sm:items-center sm:justify-between sm:px-10">
          <div>
            <h2 className="text-2xl font-black text-[#493612]">
              Ready to make a plan?
            </h2>
            <p className="mt-2 text-[#765f32]">
              Your entries are used only for the current calculation.
            </p>
          </div>
          <Link
            href="/planner"
            className="mt-6 inline-flex rounded-full bg-[var(--primary-dark)] px-6 py-3 font-bold text-white transition hover:bg-[var(--primary)] sm:mt-0"
          >
            Open the planner
          </Link>
        </div>
      </section>
    </div>
  );
}
