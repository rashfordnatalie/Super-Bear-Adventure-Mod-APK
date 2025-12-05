// app/terms-and-conditions/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms and Conditions - Super Bear Adventure Mod APK | Legal Notice & User Responsibilities",
  description: "Read the Terms and Conditions for using Super Bear Adventure Mod APK website. Understand user responsibilities, legal obligations, and our policies regarding content and downloads.",
  keywords: "Super Bear Adventure Mod APK terms and conditions, terms of use, user agreement, legal notice, user responsibilities, website terms, APK disclaimer, copyright policy",
  openGraph: {
    title: "Terms and Conditions - Super Bear Adventure Mod APK",
    description: "Read the Terms and Conditions for using Super Bear Adventure Mod APK website. Understand user responsibilities, legal obligations, and our policies.",
    type: "website",
    url: `https://superbearadv.com/terms-and-conditions`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions - Super Bear Adventure Mod APK",
    description: "Read the Terms and Conditions for using Super Bear Adventure Mod APK website. Understand user responsibilities and legal obligations.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://superbearadv.com/terms-and-conditions`,
    languages: {
      en: "https://superbearadv.com/terms-and-conditions"
    },
  },
}

export default function TermsPage() {
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
                Terms and Conditions
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms and Conditions</h1>

          <div className="text-gray-700 dark:text-gray-300 mb-8">
            <p className="mb-4">
              Welcome to Super Bear Adventure Mod APK. By using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
            </p>
            <p className="mb-4">
              If you do not agree with any part of these terms, you must not use or access our website.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By visiting, browsing, or downloading any file from this website, you acknowledge that you have read, understood, and agree to these Terms and Conditions. These terms apply to all visitors, users, and others who access or use our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">2. Purpose of the Website</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our website provides information, guides, and third-party download links for the Super Bear Adventure Mod APK and related content. The purpose of this site is for educational and informational use only. We aim to help users understand gameplay, features, and installation methods for entertainment purposes.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We do not own or modify the original version of the game, and this site is not affiliated with Earthkwak Games or any official developer.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">3. User Responsibilities</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When using our website, you agree that you will:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-4 list-disc pl-6">
            <li>Use the website only for lawful purposes.</li>
            <li>Not use our site to distribute malware, spam, or harmful software.</li>
            <li>Not attempt to hack, damage, or disrupt the website's functionality.</li>
            <li>Respect all applicable copyright and intellectual property laws.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            You are solely responsible for ensuring that the use of any files or apps downloaded through our links is legal in your region or device.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">4. Mod APK Disclaimer</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Mod APKs or modified versions provided here are developed by independent third parties, not by the original developers. While we test and review all shared files to ensure they are safe and functional, we do not guarantee complete safety, reliability, or performance.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Users should download and install them at their own risk. We will not be held responsible for any data loss, device malfunction, or issues arising from third-party downloads.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">5. Intellectual Property Rights</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            All game names, logos, trademarks, and images used on this website belong to their respective owners or developers (in this case, Earthkwak Games). The use of these materials is for reference and educational purposes only.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We do not claim ownership of the original Super Bear Adventure or any associated assets.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">6. Third-Party Links</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our website may contain links to external websites or third-party servers for downloading apps. We do not control or manage the content, accuracy, or safety of these websites.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Visiting or downloading from third-party sources is entirely at your own risk.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We recommend checking the privacy policies and terms of service of any third-party websites you visit.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Under no circumstances shall Super Bear Adventure Mod APK or its owners, writers, or developers be liable for any direct, indirect, incidental, or consequential damages resulting from the use of our website or the downloaded content.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This includes, but is not limited to:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-4 list-disc pl-6">
            <li>Data loss or corruption</li>
            <li>Software or hardware issues</li>
            <li>Unauthorized access to your data</li>
            <li>Financial or technical damages</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Your use of this website and its content is entirely at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">8. Accuracy of Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We make every effort to ensure that the information on our site is accurate and up-to-date. However, we do not guarantee that all descriptions, guides, or download links are error-free or current.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We reserve the right to modify or remove content without prior notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">9. Termination of Access</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may suspend or terminate access to our website immediately, without prior notice, for any reason whatsoever, including violation of these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">10. Changes to These Terms</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We reserve the right to update or modify these Terms and Conditions at any time. The updated version will be posted on this page with a new "Last Updated" date. Continued use of the site after any modifications constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">11. Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of your country or region of residence. Any disputes arising out of the use of this website shall be resolved in local courts.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">12. Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have any questions or concerns about these Terms and Conditions, please reach out to us:
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            <strong>Email:</strong> <a href="mailto:callowayblithe@gmail.com" className="text-brown-600 dark:text-brown-400 hover:underline">callowayblithe@gmail.com</a>
          </p>

          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This website is not associated with Earthkwak Games or the official Super Bear Adventure developers. The content provided is for educational and entertainment purposes only, intended to help users understand the gameplay and features.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}