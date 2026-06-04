import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Our Best Work & Digital Creations",
  description:
    "Browse our portfolio of agency websites, e-commerce platforms, AI-powered tools, and full-stack applications built by the Scalix team.",
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/project",
  },
  keywords: [
    "projects scalix",
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
    "web development portfolio",
    "web development agency in lucknow",
    "web development agency in india",
  ],
  openGraph: {
    title: "Projects — Our Best Work & Digital Creations",
    description:
      "Browse our portfolio of agency websites, e-commerce platforms, AI-powered tools, and full-stack applications built by the Scalix team.",
    url: "https://scalix-web-agency.netlify.app/project",
    siteName: "Scalix Web Agency",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Projects Scalix Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Our Best Work & Digital Creations",
    description:
      "Browse our portfolio of agency websites, e-commerce platforms, AI-powered tools, and full-stack applications built by the Scalix team.",
    images: ["/hero.png"],
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
