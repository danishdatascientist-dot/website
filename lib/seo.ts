export const SITE_URL = "https://www.danishshahzadai.com";
export const PERSON_ID = `${SITE_URL}/#danish`;

export const breadcrumbSchema = (items: Array<{ name: string; path?: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.path !== undefined ? { item: `${SITE_URL}${item.path}` } : {}),
  })),
});

export const serviceSchema = ({ name, path, description, audience }: { name: string; path: string; description: string; audience: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType: name,
  description,
  provider: { "@id": PERSON_ID },
  areaServed: "Worldwide",
  availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE_URL}${path}` },
  audience: { "@type": "Audience", audienceType: audience },
});
