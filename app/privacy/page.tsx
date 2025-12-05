// app/privacy/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Super Bear Adventure Mod APK  | Data Protection & User Privacy",
  description: "Learn how Super Bear Adventure Mod APK  protects your privacy and personal information. Our comprehensive privacy policy covers data collection, usage, security measures, and your rights as a user.",
  keywords: "Super Bear Adventure Mod APK  privacy policy, data protection, personal information security, user privacy rights, cookies policy, data security, privacy practices, information collection",
  openGraph: {
    title: "Privacy Policy - Super Bear Adventure Mod APK ",
    description: "Learn how Super Bear Adventure Mod APK  protects your privacy and personal information. Comprehensive privacy policy covering data collection, usage, and security.",
    type: "website",
    url: `https://superbearadv.com/privacy`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Super Bear Adventure Mod APK ",
    description: "Learn how Super Bear Adventure Mod APK  protects your privacy and personal information. Comprehensive privacy policy covering data collection and security.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://superbearadv.com/privacy`,
    languages: {
      en: "https://superbearadv.com/privacy"
    },
  },
}

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Privacy Policy
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

          <div className="text-gray-700 dark:text-gray-300 mb-8">
            <p className="mb-4">
              Welcome to Super Bear Adventure Mod APK. Your privacy is our top priority. This Privacy Policy explains how we collect, use, and protect your information when you visit or interact with our website.
            </p>
            <p className="mb-4">
              By using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We do not collect any personal information directly from users unless voluntarily provided. However, like most websites, we may collect certain non-personal data automatically to improve user experience.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">Types of information we may collect include:</p>
          <ul className="text-gray-700 dark:text-gray-300 mb-4 list-disc pl-6">
            <li><strong>Device information:</strong> browser type, operating system, screen resolution, and device model.</li>
            <li><strong>Usage data:</strong> pages visited, time spent on each page, and referring URLs.</li>
            <li><strong>Cookies:</strong> small files stored on your device to improve website functionality and remember preferences.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you contact us via email or contact form, we may collect your name and email address solely for the purpose of responding to your query.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">We use the information collected to:</p>
          <ul className="text-gray-700 dark:text-gray-300 mb-4 list-disc pl-6">
            <li>Enhance and personalize your browsing experience.</li>
            <li>Analyze traffic and user behavior to improve site performance.</li>
            <li>Respond to your emails, feedback, or technical inquiries.</li>
            <li>Ensure compliance with legal obligations and prevent potential misuse.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We do not sell, trade, or rent users' personal identification information to others.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. Cookies and Third-Party Technologies</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our website may use cookies to store small pieces of data on your browser. These are mainly for analytics and functionality.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We also use third-party services such as Google Analytics or advertising networks, which may collect anonymized data about your browsing activity through cookies or similar technologies.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            You can choose to disable cookies through your browser settings, but doing so may limit certain features of the website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Third-Party Links and Content</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website may include links to third-party sites (such as app developers, gaming blogs, or download pages). Please note that we are not responsible for the privacy practices or content of these external sites. We encourage users to review the Privacy Policy of any third-party website they visit.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Security of Your Data</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We adopt appropriate data collection, storage, and processing practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, please note that no method of online transmission or storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Children's Privacy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our content is intended for general audiences and does not target children under the age of 13. We do not knowingly collect personal information from children. If we learn that a child has provided us personal data, we will promptly delete it from our servers.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Advertising Partners</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may display third-party ads through platforms like Google AdSense or similar networks. These ad networks may use cookies or web beacons to collect non-personal information for the purpose of showing personalized advertisements.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you wish to opt out of personalized advertising, visit:
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-brown-600 dark:text-brown-400 hover:underline">
              https://adssettings.google.com/
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Your Consent</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">9. Updates to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may update this Privacy Policy periodically to reflect changes in our practices. Any updates will be posted on this page with a revised date at the top. We encourage users to check this page frequently to stay informed about how we protect the personal information we collect.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Email:</strong> <a href="mailto:callowayblithe@gmail.com" className="text-brown-600 dark:text-brown-400 hover:underline">callowayblithe@gmail.com</a>
          </p>

          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This website is not affiliated with or endorsed by Earthkwak Games or any official developer of Super Bear Adventure. The information provided here is for educational and entertainment purposes only, to help users understand the features of the game.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}