"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  fallbackHref?: string;
  label?: string;
  preferFallback?: boolean;
};

const BackButton = ({
  fallbackHref = "/",
  label = "Back",
  preferFallback = false,
}: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    const hasInternalReferrer =
      document.referrer !== "" &&
      new URL(document.referrer).origin === window.location.origin;

    if (!preferFallback && hasInternalReferrer && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 shadow-sm transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
    >
      <ArrowLeft size={18} aria-hidden="true" />
      {label}
    </button>
  );
};

export default BackButton;
