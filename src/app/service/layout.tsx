import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Web Development, Design, Hosting & More",
  description:
    "Scalix offers custom website development, web application development, UI/UX design, hosting & deployment, website maintenance, and SEO optimization services.",
  alternates: {
    canonical: "https://scalix.com/service",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
