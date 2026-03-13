import Image from "next/image";

const services = [
  {
    title: "Audit",
    description:
      "Understand how work really happens. We map workflows, data, and decisions before writing a single line of code.",
    image: "/audit.png",
  },
  {
    title: "Build",
    description:
      "Design and implement fit-for-purpose AI systems. No generic templates—only what your operation actually needs.",
    image: "/build.png",
  },
  {
    title: "Adopt",
    description:
      "Ensure AI is used, trusted, and sustained. Technology without adoption is just a cost center.",
    image: "/Images/adopt1.png",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="card-standard p-0 overflow-hidden"
          >

            {/* Image Section */}
            <div className="h-60 relative bg-gray-50 rounded-t-3xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="p-8">
              <h3 className="heading-3 text-blue-700 mb-4">
                {service.title}
              </h3>
              <p className="body-text">
                {service.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
