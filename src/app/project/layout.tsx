import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Our Best Work & Digital Creations",
  description:
    "Browse our portfolio of agency websites, e-commerce platforms, AI-powered tools, and full-stack applications built by the Scalix team.",
  alternates: {
    canonical: "https://scalix.com/project",
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
