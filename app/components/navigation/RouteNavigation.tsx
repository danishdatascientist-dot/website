"use client";

import { usePathname } from "next/navigation";
import BackButton from "./BackButton";
import PageNavigation, { type PageNavigationTarget } from "./PageNavigation";

const pageOrder: PageNavigationTarget[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "E-Commerce Expertise", href: "/ecommerce-expertise" },
  { label: "Certificates", href: "/certificates" },
  { label: "Education", href: "/education" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const RouteBackNavigation = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const isBlogArticle = pathname.startsWith("/blog/");
  const isProjectDetail = pathname.startsWith("/projects/");
  const isServiceDetail = pathname.startsWith("/services/");

  return (
    <div className="border-b border-gray-100 bg-white/80 dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <BackButton
          fallbackHref={
            isBlogArticle ? "/blog" : isProjectDetail ? "/projects" : isServiceDetail ? "/services" : "/"
          }
          label={
            isBlogArticle
              ? "Back to Blog"
              : isProjectDetail
                ? "Back to Projects"
                : isServiceDetail
                  ? "Back to Services"
                : "Back"
          }
          preferFallback={isBlogArticle || isProjectDetail || isServiceDetail}
        />
      </div>
    </div>
  );
};

export const RoutePageNavigation = () => {
  const pathname = usePathname();
  const serviceNavigation: Record<string, { previous: PageNavigationTarget; next: PageNavigationTarget }> = {
    "/services/ai-tutoring": {
      previous: { label: "All Services", href: "/services" },
      next: { label: "1:1 AI Consultation", href: "/services/consultation" },
    },
    "/services/consultation": {
      previous: { label: "AI Tutoring", href: "/services/ai-tutoring" },
      next: { label: "E-Commerce Consulting", href: "/services/ecommerce-consulting" },
    },
    "/services/ecommerce-consulting": {
      previous: { label: "1:1 AI Consultation", href: "/services/consultation" },
      next: { label: "Contact", href: "/contact" },
    },
  };
  const serviceLinks = serviceNavigation[pathname];
  if (serviceLinks) {
    return (
      <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
        <PageNavigation previous={serviceLinks.previous} next={serviceLinks.next} />
      </div>
    );
  }
  const currentIndex = pageOrder.findIndex((page) => page.href === pathname);
  if (currentIndex === -1) return null;

  const previous =
    currentIndex > 0 ? pageOrder[currentIndex - 1] : undefined;
  const next =
    currentIndex < pageOrder.length - 1
      ? pageOrder[currentIndex + 1]
      : { label: "Home", href: "/" };

  return (
    <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <PageNavigation previous={previous} next={next} />
    </div>
  );
};
