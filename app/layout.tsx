import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "Campus Meal Budget Planner",
    template: "%s | Campus Meal Budget Planner",
  },
  description:
    "A simple meal budget planner for university students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="border-t border-[var(--line)] bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>Campus Meal Budget Planner</p>
            <p>Introduction to AI Programming · Assignment 4</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
