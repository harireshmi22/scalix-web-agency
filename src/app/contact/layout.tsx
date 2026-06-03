import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Let's Build Something Amazing",
  description:
    "Get in touch with Scalix Web Agency. Reach us via WhatsApp, email, or phone. We typically respond within 30 minutes during business hours.",
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
