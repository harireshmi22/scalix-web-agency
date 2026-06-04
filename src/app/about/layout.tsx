import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Meet the Team & Our Mission",
  description:
    "Meet the team behind Scalix Web Agency. Learn about our values, our process, and why we started our journey to build premium web experiences.",
  keywords: [
    "about scalix",
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
    title: "About Us — Meet the Team & Our Mission",
    description:
      "Meet the team behind Scalix Web Agency. Learn about our values, our process, and why we started our journey.",
    url: "https://scalix-web-agency.netlify.app/about",
    siteName: "Scalix Web Agency",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "About Scalix Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Meet the Team & Our Mission",
    description:
      "Meet the team behind Scalix Web Agency. Learn about our values, our process, and why we started our journey.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "https://scalix-web-agency.netlify.app/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
