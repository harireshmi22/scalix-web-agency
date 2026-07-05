import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "web design and development agency",
    "website banwa lijiye"
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
        alt: "Scalix Web Agency — Premium Web Development Agency",
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
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZGG74CL');`,
          }}
        />
        {/* End Google Tag Manager */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="lazyOnload"
        />
        <link rel="preload" as="image" href="/home-removebg-preview.avif" />
      </head>

      <body className="min-h-screen flex flex-col overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZGG74CL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LenisProvider>
          <Header />

          <main className="flex-1 w-full">
            {children}
          </main>

          <Footer />
          <Analytics />
          <SpeedInsights />

          {/* Floating Instagram (Left Bottom) */}
          <a
            href="https://www.instagram.com/scalix.hks/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg shadow-purple-900/40 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40 active:scale-95 transition-all duration-300 animate-bounce"
            style={{ animationDuration: '3.2s' }}
            id="instagram-floating-btn"
            aria-label="Visit our Instagram"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="absolute inset-0 rounded-full border-2 border-[#ee2a7b] animate-ping opacity-30" />
          </a>

          {/* Floating WhatsApp (Right Bottom) */}
          <a
            href="https://wa.me/919555859701"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg shadow-green-900/40 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-green-500/40 active:scale-95 transition-all duration-300 animate-bounce"
            style={{ animationDuration: '2.8s' }}
            id="whatsapp-floating-btn"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 sm:w-7 sm:h-7">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
          </a>
        </LenisProvider>
      </body>
    </html>
  );
}
