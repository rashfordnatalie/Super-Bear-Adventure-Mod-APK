import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DownloadPageContent } from "@/components/download-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Super Bear Adventure Mod APK v12.0.4 - Mod Menu + Unlocked All",
  description:
    "Download Super Bear Adventure Mod APK v12.0.4 with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free on Android.",
  keywords: "Super Bear Adventure Mod APK download, Super Bear Adventure v12.0.4, mod menu, god mode, unlimited money, unlimited health, all regions unlocked, free download, 3D platformer game",
  openGraph: {
    title: "Download Super Bear Adventure Mod APK v12.0.4 - Mod Menu + Unlocked All",
    description:
      "Download Super Bear Adventure Mod APK v12.0.4 with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
    type: "website",
    url: "https://superbearadv.com/download",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Super Bear Adventure Mod APK v12.0.4 - Mod Menu + Unlocked All",
    description:
      "Download Super Bear Adventure Mod APK v12.0.4 with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://superbearadv.com/download",
  },
}

export const revalidate = 3600

export default function DownloadPage() {
  return (
    <>
      <div className="bg-background text-foreground transition-colors duration-300">
        <Header />

        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* Server-rendered breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground pt-8 select-none">
            <ol className="flex space-x-2">
              <li className="flex items-center">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">{">"}</span>
                <span className="font-semibold text-foreground">Download</span>
              </li>
            </ol>
          </nav>
 
          <DownloadPageContent />
        </main>

        <Footer />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "SoftwareApplication",
            name: "Super Bear Adventure Mod APK",
            operatingSystem: "Android 5.0 or higher",
            applicationCategory: "GameApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              ratingCount: "100000000"
            },
            description: "Download Super Bear Adventure Mod APK v12.0.4 with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
            downloadUrl: "https://superbearadv.com/download",
            softwareVersion: "12.0.4",
            fileSize: "150MB",
            author: {
              "@type": "Organization",
              name: "Earthkwak Games"
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://superbearadv.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Download",
                  item: "https://superbearadv.com/download",
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}