import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Everything Your Website Needs",
  description:
    "Explore all Scalix features: cloud hosting, website management, professional web services, bug fixing, SEO optimization, and CI/CD deployment pipelines.",
  alternates: {
    canonical: "https://scalix.com/feature",
  },
};

export default function FeatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
