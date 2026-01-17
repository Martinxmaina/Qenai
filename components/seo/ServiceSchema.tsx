interface ServiceSchemaProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  url?: string;
}

export function ServiceSchema({
  name,
  description,
  provider = "QENAI",
  areaServed = "Africa",
  url,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://qenai.com",
    },
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    ...(url && { url }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default ServiceSchema;
