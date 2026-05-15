import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: "starlink-satellite-tracking",
      title: "Starlink Satellite Detection",
      description:
        "Built ML pipeline achieving 90%+ accuracy in detecting satellite signals across 4000+ satellites",
      metrics: [
        { label: "Accuracy", value: "90%+" },
        { label: "Satellites Tracked", value: "4000+" },
        { label: "Manual Work Saved", value: "8+ hrs/week" },
      ],
    },
    {
      slug: "vwo-conversion-optimization",
      title: "VWO Revenue Growth",
      description:
        "Drove $10M+ revenue through experimentation framework and BNPL payment optimization",
      metrics: [
        { label: "Revenue Generated", value: "$10M+" },
        { label: "Experiments Run", value: "50+" },
        { label: "BNPL Lift", value: "30%" },
      ],
    },
    {
      slug: "stallion-growth",
      title: "Stallion Express Scale",
      description:
        "Scaled logistics platform achieving 35% MoM traffic growth and 50% fulfillment efficiency",
      metrics: [
        { label: "Traffic Growth", value: "35% MoM" },
        { label: "Customer Growth", value: "5%" },
        { label: "Fulfillment Reduction", value: "50%" },
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-400">
              Deep dives into problems solved, impact delivered, and lessons
              learned
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block group"
              >
                <div className="p-8 bg-dark-secondary border-2 border-gray-700 group-hover:border-accent-primary transition-colors">
                  <h2 className="text-3xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-gray-400 mb-6 text-lg">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-accent-primary">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-accent-secondary font-bold">
                    Read Case Study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
