import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Transparent Plans for Every Business",
  description:
    "Explore Scalix Web Agency pricing: Starter, Professional, and Agency website packages, custom per-page pricing, add-on services, and monthly maintenance plans. No hidden fees.",
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
