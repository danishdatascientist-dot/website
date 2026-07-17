import React from "react";
import { CalendarDays, Mail } from "lucide-react";
import { calendlyUrl } from "@/data/serviceConfig";
import { contactDetails } from "@/data/contact";

const BookingCard = () => (
  <aside className="rounded-2xl border border-purple-200 bg-purple-50 p-7 dark:border-purple-800 dark:bg-purple-950/30">
    <CalendarDays className="h-9 w-9 text-primary" aria-hidden="true" />
    <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
      1:1 Consultation
    </h2>
    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
      A focused 30–60 minute paid session for businesses or individuals
      deciding where and how AI, data, or automation can improve their work.
    </p>
    {!calendlyUrl && (
      <p className="mt-4 font-medium text-purple-700 dark:text-purple-300">
        Calendly booking link coming soon.
      </p>
    )}
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={`${contactDetails.mailto}?subject=1%3A1%20AI%20Consultation`}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary/90"
      >
        <Mail size={17} aria-hidden="true" /> Request a Session
      </a>
      {calendlyUrl && (
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-3 font-semibold text-primary"
        >
          <CalendarDays size={17} aria-hidden="true" /> Book on Calendly
        </a>
      )}
    </div>
  </aside>
);

export default BookingCard;
