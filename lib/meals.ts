export type MealStyle = "budget" | "balanced" | "filling";

export type MealSuggestion = {
  name: string;
  estimatedPrice: number;
  style: MealStyle[];
  description: string;
  reason: string;
};

export const mealSuggestions: MealSuggestion[] = [
  {
    name: "Toast and milk",
    estimatedPrice: 2500,
    style: ["budget"],
    description: "A simple toast sandwich with a carton of milk.",
    reason: "Keeps costs very low while covering a light meal.",
  },
  {
    name: "Convenience store combo",
    estimatedPrice: 3500,
    style: ["budget", "balanced"],
    description: "Triangle kimbap, a boiled egg, and water.",
    reason: "Combines carbohydrates and protein at a controlled price.",
  },
  {
    name: "Campus cafeteria meal",
    estimatedPrice: 4500,
    style: ["budget", "balanced", "filling"],
    description: "A rotating rice, soup, and side-dish set.",
    reason: "Usually offers the best portion-to-price value on campus.",
  },
  {
    name: "Kimbap",
    estimatedPrice: 4000,
    style: ["budget", "balanced"],
    description: "A full vegetable and egg kimbap roll.",
    reason: "Portable, predictable in price, and more varied than a snack.",
  },
  {
    name: "Bibimbap",
    estimatedPrice: 6500,
    style: ["balanced", "filling"],
    description: "Rice mixed with vegetables, egg, and gochujang.",
    reason: "Provides a balanced mix of grains, vegetables, and protein.",
  },
  {
    name: "Rice bowl",
    estimatedPrice: 7000,
    style: ["balanced", "filling"],
    description: "A chicken or tofu rice bowl with vegetables.",
    reason: "A substantial one-bowl meal that remains easy to budget.",
  },
  {
    name: "Gukbap",
    estimatedPrice: 8000,
    style: ["filling"],
    description: "Hot soup with rice and a generous protein portion.",
    reason: "A warm, filling option when the per-meal budget allows it.",
  },
  {
    name: "Pasta lunch set",
    estimatedPrice: 9500,
    style: ["balanced", "filling"],
    description: "Pasta with a small salad or drink.",
    reason: "Adds variety while staying within a flexible meal allowance.",
  },
  {
    name: "Chicken plate",
    estimatedPrice: 11000,
    style: ["filling"],
    description: "Grilled chicken, rice, and a fresh side.",
    reason: "Prioritizes protein and a large portion for a high allowance.",
  },
];
