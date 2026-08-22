export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QENAI",
    legalName: "QEN AI",
    url: "https://qenai.com",
    logo: "https://qenai.com/qenai-logo.png",
    description:
      "QENAI is an AI automation agency helping businesses across Kenya and East Africa increase revenue, reduce manual work, and scale faster with custom AI systems and workflow automation.",
    email: "martin@qenai.co",
    sameAs: [
      "https://www.linkedin.com/company/qenaico/",
      "https://www.instagram.com/",
      "https://www.facebook.com/profile.php?id=61587141206366",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default OrganizationSchema;
