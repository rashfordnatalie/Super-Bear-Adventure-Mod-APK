"use client"

import { Download } from 'lucide-react'

export function FinalWordsSection() {
  const handleDownloadClick = () => {
    // Replace with your actual download page URL
    window.location.href = '/download' // or use Next.js router
  }

  return (
    <section className="py-3 mb-5">
      <div className="max-w-4xl mx-auto p x-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Final Verdict
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
            To sum it up, Super Bear Adventure is one of the few adventure games that offers thrills, excitement, suspense, and a compelling storyline all in one place. The modified version makes this gameplay even more immersive with its premium features unlocked.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
            It provides you with money, coins, accessories, outfits, and lootboxes, which help you a lot in your journey to save the kingdom. You can double the fun with Multiplier mode, which has just been added to the game. So, download Super Bear Adventure Mod APK right now and save the kingdom with unlimited resources.
          </p>
          <button 
            onClick={handleDownloadClick}
            className="bg-brown-500 hover:bg-brown-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center mx-auto"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </button>
        </div>
      </div>
    </section>
  )
}