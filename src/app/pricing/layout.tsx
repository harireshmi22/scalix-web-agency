import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Transparent Plans for Every Business",
  description:
    "Explore Scalix Web Agency pricing: Starter, Professional, and Agency website packages, custom per-page pricing, add-on services, and monthly maintenance plans. No hidden fees.",
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/pricing",
  },
  keywords: [
    "pricing scalix",
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
    title: "Pricing — Transparent Plans for Every Business",
    description:
      "Explore Scalix Web Agency pricing: Starter, Professional, and Agency website packages, custom per-page pricing, add-on services, and monthly maintenance plans. No hidden fees.",
    url: "https://scalix-web-agency.netlify.app/pricing",
    siteName: "Scalix Website Development Agency",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Pricing Scalix Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Transparent Plans for Every Business",
    description:
      "Explore Scalix Web Agency pricing: Starter, Professional, and Agency website packages, custom per-page pricing, add-on services, and monthly maintenance plans. No hidden fees.",
    images: ["/hero.png"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
