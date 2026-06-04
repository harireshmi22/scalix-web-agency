import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Everything Your Website Needs",
  description:
    "Explore all Scalix features: cloud hosting, website management, professional web services, bug fixing, SEO optimization, and CI/CD deployment pipelines.",
  keywords: [
    "feature scalix",
    "web development team",
    "our mission",
    "team Scalix",
    "Lucknow developers",
    "Scalix founders",
    "web development company in lucknow",
    "IT agency team",
    "website development agency",
    "Scalix web agency",
    "website banwane ke liye agency",
    "custom website",
    "responsive design",
    "responsiveness design of the website",
    "best website development company in India",
    "full-stack development",
    "website maintenance",
    "website hosting",
    "website speed optimization",
    "website redesign",
    "e-commerce development",
    "custom web applications",
    "web design services",
    "web development services",
    "web development pricing",
    "web development cost",
    "web development portfolio",
    "web development agency in lucknow",
    "web development agency in india",
  ],
  openGraph: {
    title: "Features — Everything Your Website Needs",
    description:
      "Explore all Scalix features: cloud hosting, website management, professional web services, bug fixing, SEO optimization, and CI/CD deployment pipelines.",
    url: "https://scalix-web-agency.netlify.app/feature",
    siteName: "Scalix Web Agency",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Features Scalix Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — Everything Your Website Needs",
    description:
      "Explore all Scalix features: cloud hosting, website management, professional web services, bug fixing, SEO optimization, and CI/CD deployment pipelines.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/feature",
  },
};

export default function FeatureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
