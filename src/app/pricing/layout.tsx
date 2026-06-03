import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Transparent Plans for Every Business",
  description:
    "Explore Scalix Web Agency pricing: Starter, Professional, and Agency website packages, custom per-page pricing, add-on services, and monthly maintenance plans. No hidden fees.",
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/pricing",
  },
  openGraph: {
    title: "Pricing — Transparent Plans for Every Business",
    description:
      "Explore Scalix Web Agency pricing: Starter, Professional, and Agency website packages, custom per-page pricing, add-on services, and monthly maintenance plans. No hidden fees.",
    url: "https://scalix-web-agency.netlify.app/pricing",
    siteName: "Scalix Web Agency",
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
