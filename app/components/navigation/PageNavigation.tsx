import Link from "next/link";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type PageNavigationTarget = {
  label: string;
  href: string;
};

type PageNavigationProps = {
  previous?: PageNavigationTarget;
  next: PageNavigationTarget;
};

const PageNavigation = ({ previous, next }: PageNavigationProps) => (
  <nav
    aria-label="Previous and next portfolio pages"
    className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:px-8"
  >
    {previous ? (
      <Link
        href={previous.href}
        className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          <ArrowLeft size={16} aria-hidden="true" />
          Previous
        </span>
        <span className="mt-2 block text-lg font-bold text-gray-900 group-hover:text-primary dark:text-white">
          {previous.label}
        </span>
      </Link>
    ) : (
      <span aria-hidden="true" className="hidden sm:block" />
    )}
    <Link
      href={next.href}
      className="group rounded-2xl border border-gray-200 bg-white p-5 text-right shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
    >
      <span className="flex items-center justify-end gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
        Next
        <ArrowRight size={16} aria-hidden="true" />
      </span>
      <span className="mt-2 block text-lg font-bold text-gray-900 group-hover:text-primary dark:text-white">
        {next.label}
      </span>
    </Link>
  </nav>
);

export default PageNavigation;
