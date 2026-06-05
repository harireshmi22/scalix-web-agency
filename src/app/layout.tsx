import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const BASE_URL = "https://scalix-web-agency.netlify.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d59",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: "/icon.jpeg",
    apple: "/apple-icon.jpeg",
  },
  title: {
    default: "Scalix Website Development Agency — Premium Web Development & Design",
    template: "%s | Scalix Website Development Agency",
  },
  description:
    "Scalix Website Development Agency builds premium, scalable, and high-performance websites and web applications. Specializing in Next.js, React, MERN stack, UI/UX design, SEO optimization, and hosting for businesses and creators.",
  keywords: [
    "web development agency",
    "website designer",
    "website development full services",
    "web design",
    "Next.js development",
    "React development",
    "MERN stack",
    "UI/UX design",
    "SEO optimization",
    "web application development",
    "website maintenance",
    "hosting and deployment",
    "Scalix",
    "lucknow web development company",
    "India web development",
    "Indian website development",
    "custom website development",
    "web agency in lucknow",
    "website development agency",
    "scalix web agency",
    "website banwane ke liye agency",
    "custom website",
    "responsive design",
    "responsiveness design of the website",
    "best website development company in India",
    "full-stack development",
    "React and Next.js Web Application Development",
    "Hosting, Deployment and Website Maintenance",
    "E-commerce Development",
    "Scalix Web Agency Services",
    "single page website",
    "landing page website",
    "web design and development",
    "figma to website",
    "multi page website",
    "SEO Optimized Website Design",
    "web design and development services",
    "scalix web agency team",
    "scalix founders",
    "web agency India",
    "Scalix helps startups",
    "creators",
    "and buissness build fast",
    "and SEO-friendly websites using Next.js",
    "AI-powered tools",
    "full-stack applications",
    "React",
    "and MERN stack Technologies",
    "web service and hosting company",
    "web design and development agency"
  ],

  authors: [{ name: "Scalix Website Development Agency", url: BASE_URL }],
  creator: "Scalix Website Development Agency",
  publisher: "Scalix Website Development Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Scalix Website Development Agency",
    title: "Scalix Website Development Agency — Premium Web Development & Design",
    description:
      "We architect premium, bespoke digital products that combine beautiful design, reliable functionality, and industry-leading performance to elevate your business.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Scalix Web Agency — Premium Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalix Website Development Agency — Premium Web Development & Design",
    description:
      "We build secure, scalable, and high-performance websites for businesses and creators. Next.js · React · MERN · UI/UX · SEO.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// JSON-LD Structured Data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Scalix Website Development Agency",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.jpeg`,
  image: `${BASE_URL}/hero.png`,
  description:
    "Premium web development agency specializing in Next.js, React, MERN stack, UI/UX design, and SEO optimization for businesses and creators.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, 75, Navavoor",
    addressLocality: "Lucknow",
    addressRegion: "Uttarpradesh",
    postalCode: "226017",
    addressCountry: "IN",
  },
  telephone: "+917598805818",
  email: "hello@scalix.com",
  priceRange: "₹₹",
  sameAs: [],
  founder: [
    { "@type": "Person", name: "Hari Reshmi", jobTitle: "Manager & Coordinator" },
    { "@type": "Person", name: "Kanishq Gautam", jobTitle: "MERN Developer" },
    { "@type": "Person", name: "Srestha Mishra", jobTitle: "AI/ML Developer" },
    { "@type": "Person", name: "Kaushtubh Singh", jobTitle: "JS Developer" },
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Website Development",
    "Web Application Development",
    "UI/UX Design",
    "SEO Optimization",
    "Hosting & Deployment",
    "Website Maintenance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="lazyOnload"
        />
        <link rel="preload" as="image" href="/home-removebg-preview.avif" />
      </head>

      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <LenisProvider>
          <Header />

          <main className="flex-1 w-full">
            {children}
          </main>

          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
