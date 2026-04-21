import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ProductHighlight from "../components/ProductHighlight";
import ResearchCards from "../components/ResearchCards";
import Updates from "../components/Updates";
import Footer from "../components/Footer";
import PerformanceMonitor from "../components/PerformanceMonitor";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Haqikos - Reimagining the Future of AI | Next-Gen AI Platform
        </title>
        <meta
          name="description"
          content="Building intelligent systems that understand, learn, and adapt – with Haqikos, the next-gen AI powerhouse. Experience quantum intelligence, lightning-fast responses, and enterprise-grade security."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://haqikos.ai" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Haqikos - Reimagining the Future of AI | Next-Gen AI Platform"
        />
        <meta
          property="og:description"
          content="Building intelligent systems that understand, learn, and adapt – with Haqikos, the next-gen AI powerhouse."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haqikos.ai" />
        <meta property="og:image" content="https://haqikos.ai/og-image.jpg" />
        <meta property="og:site_name" content="Haqikos" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Haqikos - Reimagining the Future of AI | Next-Gen AI Platform"
        />
        <meta
          name="twitter:description"
          content="Building intelligent systems that understand, learn, and adapt – with Haqikos, the next-gen AI powerhouse."
        />
        <meta
          name="twitter:image"
          content="https://haqikos.ai/twitter-image.jpg"
        />

        {/* Additional SEO Meta Tags */}
        <meta
          name="keywords"
          content="AI, artificial intelligence, machine learning, NLP, quantum computing, AI platform, enterprise AI, AI tools, natural language processing"
        />
        <meta name="author" content="Haqikos" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Haqikos",
              url: "https://haqikos.ai",
              logo: "https://haqikos.ai/logo.svg",
              description:
                "Building intelligent systems that understand, learn, and adapt – with Haqikos, the next-gen AI powerhouse.",
              foundingDate: "2024",
              sameAs: [
                "https://twitter.com/haqikos",
                "https://linkedin.com/company/haqikos",
                "https://github.com/haqikos",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "contact@haqikos.ai",
              },
              offers: {
                "@type": "Offer",
                description: "AI Platform and Tools",
                category: "Artificial Intelligence",
              },
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-black">
        <PerformanceMonitor />
        <Header />
        <HeroSection />
        <Features />
        <Testimonials />
        <ProductHighlight />
        <ResearchCards />
        <Updates />
        <Footer />
      </main>
    </>
  );
}
