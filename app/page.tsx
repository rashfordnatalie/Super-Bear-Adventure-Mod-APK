import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { MergeFellasMainContent } from "@/components/merge-fellas-main-content"
import { Hot51ModFeatures  } from "@/components/what-can-ai-do-section"
import { Hot51ModApkFeatures } from "@/components/MergeFellasAlternatives"
import ProsConsSection from '@/components/ProsConsSection';
import { PersonalExperienceSection } from '@/components/PersonalExperienceSection'
import { UserReviewsSection } from "@/components/user-reviews-section"
import { FAQSection } from "@/components/faq-section"
import { FinalWordsSection } from '@/components/FinalWordsSection'
import { Hot51DownloadGuide } from '@/components/Hot51DownloadGuide' 
import PlayStoreStyleApp from '@/components/PlayStoreStyleApp'

export const metadata: Metadata = {
  title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
  description:
    "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
  openGraph: {
    title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
    description:
      "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
    type: "website",
    url: "https://superbearadv.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
    description:
      "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://superbearadv.com",
  },
}

export const revalidate = 3600

export default async function HomePage() {
    // const posts = await fetchAllPosts()
  // const latestPosts = posts.slice(0, 3)
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
                <span className="font-semibold text-foreground">Super Bear Adventure Mod APK </span>
              </li>
            </ol>
          </nav> 

           <PlayStoreStyleApp />
           <MergeFellasMainContent />
           <Hot51ModFeatures />
           <Hot51ModApkFeatures  />
           <Hot51DownloadGuide />
           <ProsConsSection />
           <UserReviewsSection  />
           <FAQSection /> 
           <FinalWordsSection />
           {/* <BlogSection posts={latestPosts}   /> */}

       
          
        </main>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Website",
              name: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
              url: "https://superbearadv.com/",
              headline: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
              description:
                "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
              image: "https://superbearadv.com/images/featured.webp",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: "1",
                  name: "Home",
                  item: "https://superbearadv.com/",
                },
                {
                  "@type": "ListItem",
                  position: "2",
                  name: "Super Bear Adventure Mod APK ",
                  item: "https://superbearadv.com/",
                },
              ],
            }),
          }}
        />

        <Footer />
      </div>

      {/* Structured Data for Mobile Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "SuperBear",
            description: "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
            url: "https://superbearadv.com",
            applicationCategory: "GameApplication",
            operatingSystem: "Android",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "SuperBear",
              url: "https://superbearadv.com",
            },
          }),
        }}
      />
    </>
  )
}
