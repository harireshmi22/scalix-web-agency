import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Let's Build Something Amazing",
  description:
    "Get in touch with Scalix Web Agency. Reach us via WhatsApp, email, or phone. We typically respond within 30 minutes during business hours.",
  keywords: [
    "contact scalix",
    "web development team",
    "our mission",
    "team Scalix",
    "Lucknow developers",
    "Scalix founders",
    "IT agency team",
    "web development company in lucknow",
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
    "Web development services provider",
    "web development portfolio",
    "web development agency in lucknow",
    "web development agency in india",
    "website development company in lucknow",
    "website development company in india",
  ],
  openGraph: {
    title: "Contact Us — Let's Build Something Amazing",
    description:
      "Get in touch with Scalix Web Agency. Reach us via WhatsApp, email, or phone. We typically respond within 30 minutes during business hours.",
    url: "https://scalix-web-agency.netlify.app/contact",
    siteName: "Scalix Web Agency",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Contact Scalix Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Let's Build Something Amazing",
    description:
      "Get in touch with Scalix Web Agency. Reach us via WhatsApp, email, or phone. We typically respond within 30 minutes during business hours.",
    images: ["/hero.png"],
  },
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
