"use client"

import React from "react"
import { Globe as GlobeIcon, Gamepad2, Settings, Box, Trophy, CloudUpload, Languages, WifiOff, Shirt, MessageCircle } from "lucide-react"

interface Hot51ModApkFeaturesProps {
  pageType?: "single" | "multi"
}

export function Hot51ModApkFeatures({ pageType = "single" }: Hot51ModApkFeaturesProps) {
  const sections = [
    {
      title: "Open-World Game",
      description: "The game takes place in an open world of seven regions, each with its own plot, twist design, and secrets. You will start from a green, lush region and have to travel through deserts, mountains, and cold, all while on a mission to save your friends and family.",
      icon: GlobeIcon,
      bgColor: "from-green-400 to-emerald-500",
      bgColorDark: "bg-green-100 dark:bg-green-900",
      iconBg: "bg-green-500"
    },
    {
      title: "Smooth Controls",
      description: "The controls menu in Super Bear Adventure allows you to customize your experience fully. You can easily reassign actions, such as moving horizontally or vertically, to different keys and buttons. This means you can adjust settings for things like moving left, right, up, and down. If you change your mind, you can also easily revert to the original settings.",
      icon: Settings,
      bgColor: "from-blue-400 to-cyan-500",
      bgColorDark: "bg-blue-100 dark:bg-blue-900",
      iconBg: "bg-blue-500"
    },
    {
      title: "3D Graphics",
      description: "Moreover, it provides a 3D, realistic experience where everything feels alive, making us feel like we are in the game. The game is filled with beautiful places, featuring mountains, flower gardens, lush green hills, and many other vibrant locations to explore. These 3D graphics make these places more immersive and magical.",
      icon: Box,
      bgColor: "from-purple-400 to-pink-500",
      bgColorDark: "bg-purple-100 dark:bg-purple-900",
      iconBg: "bg-purple-500"
    },
    {
      title: "Multiplayer Mode",
      description: "Since it is the latest version of Super Bear Adventure, you can enjoy a multiplier mode as well, which was not part of the old versions. In multiplayer mode, you can play the game with other online players all over the world and make the gameplay more entertaining. You can make friends, chat with them, and exchange various items.",
      icon: Gamepad2,
      bgColor: "from-orange-400 to-red-500",
      bgColorDark: "bg-orange-100 dark:bg-orange-900",
      iconBg: "bg-orange-500"
    },
    {
      title: "Compete on Leaderboards",
      description: "When you play Multiplayer mode, you have to compete on leaderboards to become the number one-ranked player. These quests offer high rewards and are exclusive to premium users, requiring expensive items. Competing on the leaderboard is not easy, as many player with competitive skills participates in this.",
      icon: Trophy,
      bgColor: "from-yellow-400 to-orange-500",
      bgColorDark: "bg-yellow-100 dark:bg-yellow-900",
      iconBg: "bg-yellow-500"
    },
    {
      title: "Save Progress",
      description: "It's the most essential feature of the game as it allows you to save all your achievements and collected items. You have the option to save all your progress in the cloud, which means if you have to switch to a new device or reinstall the game, you don't have to lose your hard-earned progress.",
      icon: CloudUpload,
      bgColor: "from-cyan-400 to-blue-500",
      bgColorDark: "bg-cyan-100 dark:bg-cyan-900",
      iconBg: "bg-cyan-500"
    },
    {
      title: "Multilingual Support",
      description: "As the SBA has a global audience, it offers multilingual support, allowing users to understand the interface and guidance in their native language. You can switch between languages in just one click from the settings. Here is the list of languages it supports.",
      icon: Languages,
      bgColor: "from-indigo-400 to-purple-500",
      bgColorDark: "bg-indigo-100 dark:bg-indigo-900",
      iconBg: "bg-indigo-500",
      languages: [
        "English",
        "Français (French)",
        "Português (Portuguese)",
        "Русский (Russian)",
        "Indonesia (Indonesian)",
        "Español (Spanish)",
        "Italiano (Italian)",
        "Deutsch (German)",
        "Nederlands (Dutch)",
        "Ελληνικά (Greek)",
        "Türkçe (Turkish)",
        "Polski (Polish)"
      ]
    },
    {
      title: "Offline Play",
      description: "Although most of the game is online and needs a stable internet connection, some modes can be played offline. You can still win rewards, collect items, and explore the open world without being connected to the internet. With offline play, you can enjoy the game anytime, anywhere.",
      icon: WifiOff,
      bgColor: "from-gray-400 to-gray-600",
      bgColorDark: "bg-gray-100 dark:bg-gray-900",
      iconBg: "bg-gray-500"
    },
    {
      title: "Change the Bear Appearance",
      description: "The best part is that you can customize the bear's appearance with costumes, skins, outfits, hats, and other accessories. You can get these items every 8 hours or can find them in lootboxes. Also, you can purchase them from the shop if you have the funds, allowing you to personalize your adventure.",
      icon: Shirt,
      bgColor: "from-pink-400 to-rose-500",
      bgColorDark: "bg-pink-100 dark:bg-pink-900",
      iconBg: "bg-pink-500"
    },
    {
      title: "Join the official Discord.",
      description: "Get an opportunity to connect with the SBA community by joining the official Discord of the game. In the community, you can have the chance to interact with thousands of online players and keep yourself updated with developers' latest enhancements. Furthermore, it also has a speedrunning community where you show how fast you are compared to other players.",
      icon: MessageCircle,
      bgColor: "from-violet-400 to-purple-500",
      bgColorDark: "bg-violet-100 dark:bg-violet-900",
      iconBg: "bg-violet-500"
    }
  ]

  const sectionTitle = "Key Features of Super Bear Adventure"
  const sectionDescription = "Thus far, we have discussed premium features that are only accessible to users of the Mod APK. However, we will also highlight the features that are common to both the Mod and the standard version. Check the Key features of Super Bear Adventure listed below."

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-5">
        {/* Left side sticky content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-[110px] lg:max-w-xs lg:self-start">
          <h2 className="text-3xl font-extrabold leading-tight max-w-xs text-gray-900 dark:text-white">
            {sectionTitle}
          </h2>
          <p className="text-sm opacity-80 max-w-xs text-gray-600 dark:text-gray-300">
            {sectionDescription}
          </p>
        </div>

        {/* Right side scrollable content */}
        <div className="scrollable-right flex-1 flex flex-col gap-11 lg:pr-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <section
                key={index}
                className={`right-section flex flex-col md:flex-row bg-gradient-to-r ${section.bgColor} rounded-lg shadow-lg overflow-hidden`}
              >
                {/* Icon Side */}
                <div
                  className={`md:flex-shrink-0 p-6 md:p-0 md:w-[36%] flex justify-center items-center ${section.bgColorDark}`}
                >
                  <div className={`${section.iconBg} p-6 rounded-2xl`}>
                    <IconComponent className="w-20 h-20 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="md:w-[64%] bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-r-lg">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                    {section.description}
                  </p>
                  
                  {/* Language List for Multi-Language Support */}
                  {section.languages && (
                    <div className="mt-4">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Supported Languages:</p>
                      <div className="flex flex-wrap gap-2">
                        {section.languages.map((lang, langIndex) => (
                          <span 
                            key={langIndex}
                            className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}