"use client";

import { FormEvent, useState } from "react";
import {
  mealSuggestions,
  type MealStyle,
  type MealSuggestion,
} from "@/lib/meals";

type PlannerResult = {
  remainingBudget: number;
  budgetPerMeal: number;
  status: "safe" | "caution" | "over";
  strategy: string;
  suggestions: MealSuggestion[];
};

const currency = new Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
  maximumFractionDigits: 0,
});

const initialForm = {
  totalBudget: "",
  spentAmount: "",
  remainingMeals: "",
  style: "balanced" as MealStyle,
};

function getSuggestions(budgetPerMeal: number, style: MealStyle) {
  return [...mealSuggestions]
    .sort((a, b) => {
      const aAffordable = a.estimatedPrice <= budgetPerMeal ? 1 : 0;
      const bAffordable = b.estimatedPrice <= budgetPerMeal ? 1 : 0;
      const aStyle = a.style.includes(style) ? 1 : 0;
      const bStyle = b.style.includes(style) ? 1 : 0;

      return (
        bAffordable - aAffordable ||
        bStyle - aStyle ||
        Math.abs(budgetPerMeal - a.estimatedPrice) -
          Math.abs(budgetPerMeal - b.estimatedPrice)
      );
    })
    .slice(0, 3);
}

export default function PlannerPage() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [result, setResult] = useState<PlannerResult | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const totalBudget = Number(form.totalBudget);
    const spentAmount = Number(form.spentAmount);
    const remainingMeals = Number(form.remainingMeals);

    if (
      form.totalBudget === "" ||
      form.spentAmount === "" ||
      form.remainingMeals === ""
    ) {
      setError("Please complete every budget field.");
      setResult(null);
      return;
    }

    if (
      !Number.isFinite(totalBudget) ||
      !Number.isFinite(spentAmount) ||
      !Number.isInteger(remainingMeals) ||
      totalBudget <= 0 ||
      spentAmount < 0 ||
      remainingMeals <= 0
    ) {
      setError(
        "Use a positive budget, a non-negative spent amount, and at least one whole remaining meal.",
      );
      setResult(null);
      return;
    }

    const remainingBudget = totalBudget - spentAmount;
    const budgetPerMeal = remainingBudget / remainingMeals;
    const status =
      remainingBudget < 0
        ? "over"
        : budgetPerMeal < 5000
          ? "caution"
          : "safe";
    const strategy =
      status === "over"
        ? "You have exceeded this meal budget. Avoid additional spending where possible and reset the plan for your next budget period."
        : status === "caution"
          ? "Keep the next meals simple. Prioritize the campus cafeteria, packed food, or low-cost combinations."
          : budgetPerMeal >= 9000
            ? "Your plan has flexibility. Keep one meal modest so you preserve a buffer for later."
            : "Your plan is on track. Choose balanced meals near the limit and keep a small emergency buffer.";

    setError("");
    setResult({
      remainingBudget,
      budgetPerMeal,
      status,
      strategy,
      suggestions: getSuggestions(Math.max(0, budgetPerMeal), form.style),
    });
  }

  function resetPlanner() {
    setForm(initialForm);
    setError("");
    setResult(null);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-black tracking-[0.16em] text-[var(--primary)] uppercase">
          Meal planner
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[var(--primary-dark)] sm:text-5xl">
          Plan before you spend.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          Enter your current budget situation to calculate a realistic limit
          for each remaining meal.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-xl shadow-green-950/5 sm:p-8"
        >
          <h2 className="text-xl font-black text-[var(--primary-dark)]">
            Your budget
          </h2>
          <div className="mt-7 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Total meal budget (KRW)
              </span>
              <input
                type="number"
                min="1"
                inputMode="numeric"
                placeholder="e.g. 30000"
                value={form.totalBudget}
                onChange={(event) =>
                  setForm({ ...form, totalBudget: event.target.value })
                }
                className="w-full rounded-xl border border-[var(--line)] bg-[#fbfcfa] px-4 py-3 outline-none transition focus:border-[var(--primary)] focus:ring-3 focus:ring-green-700/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Amount already spent (KRW)
              </span>
              <input
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="e.g. 8000"
                value={form.spentAmount}
                onChange={(event) =>
                  setForm({ ...form, spentAmount: event.target.value })
                }
                className="w-full rounded-xl border border-[var(--line)] bg-[#fbfcfa] px-4 py-3 outline-none transition focus:border-[var(--primary)] focus:ring-3 focus:ring-green-700/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Remaining number of meals
              </span>
              <input
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                placeholder="e.g. 3"
                value={form.remainingMeals}
                onChange={(event) =>
                  setForm({ ...form, remainingMeals: event.target.value })
                }
                className="w-full rounded-xl border border-[var(--line)] bg-[#fbfcfa] px-4 py-3 outline-none transition focus:border-[var(--primary)] focus:ring-3 focus:ring-green-700/10"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Meal style preference
              </span>
              <select
                value={form.style}
                onChange={(event) =>
                  setForm({
                    ...form,
                    style: event.target.value as MealStyle,
                  })
                }
                className="w-full rounded-xl border border-[var(--line)] bg-[#fbfcfa] px-4 py-3 outline-none transition focus:border-[var(--primary)] focus:ring-3 focus:ring-green-700/10"
              >
                <option value="budget">Budget-friendly</option>
                <option value="balanced">Balanced</option>
                <option value="filling">Filling</option>
              </select>
            </label>
          </div>

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
            >
              {error}
            </p>
          )}

          <div className="mt-7 flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-xl bg-[var(--primary)] px-5 py-3 font-bold text-white transition hover:bg-[var(--primary-dark)]"
            >
              Calculate plan
            </button>
            <button
              type="button"
              onClick={resetPlanner}
              className="rounded-xl border border-[var(--line)] px-5 py-3 font-bold text-[var(--muted)] transition hover:bg-[#f3f6f3]"
            >
              Reset
            </button>
          </div>
        </form>

        <section
          aria-live="polite"
          className="min-h-[520px] rounded-3xl bg-[var(--primary-dark)] p-6 text-white shadow-xl shadow-green-950/10 sm:p-8"
        >
          {!result ? (
            <div className="grid min-h-[455px] place-items-center text-center">
              <div className="max-w-sm">
                <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-white/10 text-2xl">
                  ₩
                </span>
                <h2 className="mt-6 text-2xl font-black">
                  Your plan will appear here
                </h2>
                <p className="mt-3 leading-7 text-[#cbd9d0]">
                  Complete the form to see your remaining balance, per-meal
                  target, and meal ideas.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#b9cfc1]">
                    Remaining budget
                  </p>
                  <p className="mt-1 text-4xl font-black">
                    {currency.format(result.remainingBudget)}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-black uppercase ${
                    result.status === "safe"
                      ? "bg-[#bce8c9] text-[#14532d]"
                      : result.status === "caution"
                        ? "bg-[#ffe4a3] text-[#764f00]"
                        : "bg-[#ffc9c9] text-[#8a1919]"
                  }`}
                >
                  {result.status}
                </span>
              </div>

              <div className="mt-6 rounded-2xl bg-white/9 p-5">
                <p className="text-sm font-semibold text-[#b9cfc1]">
                  Recommended maximum per meal
                </p>
                <p className="mt-1 text-3xl font-black">
                  {result.budgetPerMeal > 0
                    ? currency.format(Math.floor(result.budgetPerMeal))
                    : currency.format(0)}
                </p>
                <p className="mt-4 leading-6 text-[#d9e5dd]">
                  {result.strategy}
                </p>
              </div>

              <h2 className="mt-8 text-lg font-black">
                Three meal ideas
              </h2>
              <div className="mt-4 grid gap-3">
                {result.suggestions.map((meal) => {
                  const affordable =
                    meal.estimatedPrice <= result.budgetPerMeal;
                  return (
                    <article
                      key={meal.name}
                      className="rounded-2xl bg-white p-4 text-[var(--foreground)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-black">{meal.name}</h3>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {meal.description}
                          </p>
                        </div>
                        <p className="shrink-0 font-black text-[var(--primary)]">
                          {currency.format(meal.estimatedPrice)}
                        </p>
                      </div>
                      <p className="mt-3 border-t border-[var(--line)] pt-3 text-sm leading-5">
                        {affordable
                          ? meal.reason
                          : `This is above your current per-meal target. ${meal.reason}`}
                      </p>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}
