import type { Metadata } from "next"
import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { fetchPostsByLanguage } from "@/lib/api"

export const metadata: Metadata = {
  title: "Blog – Super Bear Adventure Mod APK 12.0.4 | Tips, Guides & Latest Updates",
  description:
    "Explore expert tips, tutorials, and guides for Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked. Learn about unlimited coins, skins, health & more.",
  alternates: {
    canonical: "https://superbearadv.com/blog",
  },
  openGraph: {
    title: "Blog – Super Bear Adventure Mod APK 12.0.4 | Tips, Guides & Latest Updates",
    description:
      "Explore expert tips, tutorials, and guides for Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun.",
    type: "website",
    url: "https://superbearadv.com/blog",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Super Bear Adventure Mod APK 12.0.4 | Tips, Guides & Latest Updates",
    description:
      "Explore expert tips, tutorials, and guides for Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked.",
  },
  keywords: "Super Bear Adventure blog, Super Bear Adventure tips, mod APK guide, unlimited coins, god mode, all regions unlocked, gaming tutorials, platformer tips, Earthkwak Games",
}

export const revalidate = 3600

export default async function BlogPage() {
  const posts = await fetchPostsByLanguage("en")

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 pt-8 select-none">
          <ol className="flex space-x-2 rtl:space-x-reverse">
            <li className="flex items-center">
              <a href={`/`} className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">Blog</span>
            </li>
          </ol>
        </nav>
        <section className="text-center max-w-5xl mx-auto mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-12 mb-6">
            Super Bear Adventure <span className="text-brown-500">Blog</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            The search for your next great adventure is over. Welcome to Super Bear Adventure, a charming 3D platformer game inspired by 90s themes. The game revolves around a kingdom with seven different regions, and every region has its secrets, enemies, and challenges to overcome. It is offered by Earthkwak Games and has over 100 million downloads on the Play Store, with a 4.5-star rating.
          </p>
          
        </section>
        <BlogList posts={posts} />
      </main>

      <Footer />
    </div>
  )
}