import Link from "next/link";
import React from "react";
import { ArrowRight, BrainCircuit, GraduationCap, ShoppingCart } from "lucide-react";
import type { Service } from "@/data/services";

const icons = {
  graduation: <GraduationCap className="h-8 w-8" aria-hidden="true" />,
  consultation: <BrainCircuit className="h-8 w-8" aria-hidden="true" />,
  ecommerce: <ShoppingCart className="h-8 w-8" aria-hidden="true" />,
};

const ServiceCard = ({ service }: { service: Service }) => (
  <article className="card-tilt flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-7 text-white shadow-xl backdrop-blur-sm">
    <div className="mb-5 w-fit rounded-xl bg-white/15 p-4 text-purple-200">
      {icons[service.icon]}
    </div>
    <h2 className="text-2xl font-bold">{service.title}</h2>
    <p className="mt-3 leading-7 text-slate-300">{service.shortDescription}</p>
    <div className="mt-6">
      <h3 className="font-semibold text-white">Suitable for</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {service.audience.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-300" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    <Link
      href={service.href}
      className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary/90"
    >
      {service.ctaLabel} <ArrowRight size={17} aria-hidden="true" />
    </Link>
  </article>
);

export default ServiceCard;
