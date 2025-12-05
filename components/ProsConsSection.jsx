"use client"
import React from 'react'; 

const ProsConsSection = () => {

  const prosAndCons = {
    pros: [
      "Unlimited coins, tokens & health",
      "All skins, outfits & hats unlocked",
      "God Mode & Mod Menu access",
      "Free shopping & premium items",
      "No ads, smooth gameplay",
      "Hidden locations with hints",
      "Multiplayer with leaderboards",
      "High jump, rocket boots & strength boost",
      "All characters unlocked",
      "Offline play available in some modes",
    ],
    cons: [
      "Needs third-party download",
      "Not available on Play Store",
      "Possible ban risk in multiplayer",
      "Can feel less challenging",
      "Updates not automatic",
      "Larger file size (205 MB)",
      "Requires stable internet for some modes",
      "Some bugs may appear in mod versions",
      "iOS requires jailbreaking for install",
      "Less rewarding for players who enjoy grinding",
    ]
  };

  return (
    <div className="transition-colors duration-300">
       
      {/* Pros and Cons Section */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto p x-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Pros and Cons of Super Bear Adventure Mod APK
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Before you download Super Bear Adventure Mod APK, take a look at the enhanced features it offers along with the potential risks and limitations you should consider.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg p-6 border shadow-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-gray-200/50 dark:shadow-gray-900/20">
              <h3 className="text-xl font-bold text-brown-500 mb-4 flex items-center">
                <span className="w-6 h-6 bg-brown-500 rounded-full flex items-center justify-center text-white text-sm mr-2 font-bold">
                  ✓
                </span>
                Pros
              </h3>
              <ul className="space-y-2">
                {prosAndCons.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-brown-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {pro}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg p-6 border shadow-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-gray-200/50 dark:shadow-gray-900/20">
              <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm mr-2 font-bold">
                  ✗
                </span>
                Cons
              </h3>
              <ul className="space-y-2">
                {prosAndCons.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProsConsSection;