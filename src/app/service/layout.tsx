import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Web Development, Design, Hosting & More",
  description:
    "Scalix offers custom website development, web application development, UI/UX design, hosting & deployment, website maintenance, and SEO optimization services.",
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/service",
  },
  keywords: [
    "service scalix",
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
    "best website maintanence",
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
    "website development company in lucknow",
    "website development company in india",
  ],
  openGraph: {
    title: "Services — Web Development, Design, Hosting & More",
    description:
      "Scalix offers custom website development, web application development, UI/UX design, hosting & deployment, website maintenance, and SEO optimization services.",
    url: "https://scalix-web-agency.netlify.app/service",
    siteName: "Scalix Web Agency",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Services Scalix Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Web Development, Design, Hosting & More",
    description:
      "Scalix offers custom website development, web application development, UI/UX design, hosting & deployment, website maintenance, and SEO optimization services.",
    images: ["/hero.png"],
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
