// app/contact-us/page.tsx

"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Note: Since this is a client component, metadata should be handled in layout.tsx or metadata.ts

export default function ContactPage() {
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
                Contact Us
              </span>
            </li>
          </ol>
        </nav>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>

          <div className="text-gray-700 dark:text-gray-300 mb-8">
            <p className="mb-6">
              We're always happy to hear from you! Whether you have questions about Super Bear Adventure Mod APK, need help with downloads, or want to share feedback, our team is here to assist you.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">You can reach out to us for:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>General inquiries about our content and updates.</li>
                <li>Reporting broken links or download issues.</li>
                <li>Suggestions for improving our website.</li>
                <li>Requests for information or collaboration opportunities.</li>
              </ul>
            </div>
          </div>

          {/* Email Contact Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <div className="text-center">
              <div className="text-brown-600 dark:text-brown-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Email</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">For all inquiries, please contact us at:</p>
              <a
                href="mailto:callowayblithe@gmail.com"
                className="text-xl font-semibold text-brown-600 dark:text-brown-400 hover:text-brown-700 dark:hover:text-brown-300 transition-colors"
              >
                callowayblithe@gmail.com
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-6">
                We do our best to respond to all messages within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Additional Information Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-brown-600 dark:text-brown-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-400">Usually within 24-48 hours</p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-brown-600 dark:text-brown-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Help</h3>
              <p className="text-gray-600 dark:text-gray-400">Check our FAQs for instant answers</p>
            </div>

            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-brown-600 dark:text-brown-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Help Topics</h3>
              <p className="text-gray-600 dark:text-gray-400">Downloads, Installation, Features & Technical Issues</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
