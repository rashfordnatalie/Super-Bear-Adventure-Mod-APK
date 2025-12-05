"use client"

import React from "react"
import { Globe, Shield, FolderSearch, Download, Rocket, Smartphone, HardDrive, Wifi, AlertCircle, Monitor } from "lucide-react"

export function Hot51DownloadGuide() {
  // Comparison Table Data
  const comparisonData = [
    { feature: "Cost", standard: "With purchases", modApk: "Totally free" },
    { feature: "Ads", standard: "Shows ads", modApk: "No ads" },
    { feature: "Coins", standard: "Limited coins", modApk: "Unlimited coins" },
    { feature: "Tokens", standard: "Hard to get", modApk: "Unlimited tokens" },
    { feature: "Health", standard: "Only three lives", modApk: "Infinite health" },
    { feature: "God Mode", standard: "Not available", modApk: "Always on" },
    { feature: "Skins", standard: "Locked skins", modApk: "All unlocked" },
    { feature: "Shopping", standard: "Paid items", modApk: "Free shopping" },
    { feature: "Secrets", standard: "Manual find", modApk: "Auto hints" },
    { feature: "Multiplayer", standard: "Available", modApk: "Available with perks" },
  ]

  // Levels & Antagonist Data
  const levels = [
    {
      name: "Turtletown",
      description: "This green region is the starting point of the game, where your Main goal is to stop the Main villain called King Turtle. Turtle is greedy, powerful, and the main reason behind the purple honey and turning bees into mindless foes."
    },
    {
      name: "Snow Valley",
      description: "The ruler of the Snow Valley region is The Winter Wolf, who has used honey on other animals to fight each other. You have to fight this demon in Ice, which is not an easy battle."
    },
    {
      name: "Beemothep Desert",
      description: "It is a desert area where survival becomes very hard. The Beemothep Desert is the home of a giant snake, the Great Serpent. You need a precise strategy to defeat the great serpent."
    },
    {
      name: "Giant House",
      description: "It is one of the strange places in the game, as everything is huge in it, and you look like a small toy in a big world. The main villain in this story is a toy named Plushy, which is transformed into a monster."
    },
    {
      name: "The Hive",
      description: "In the hive region, the main villain is none other than the queen bee, who was once a fair and honest ruler of his kindom. It's the final stage of the game and a crucial battle for the kingdom."
    },
    {
      name: "The Backrooms",
      description: "Backroom is one of the bonus levels where you have to find a way to the hidden monster, named Backrooms Monster."
    },
    {
      name: "Arcade World",
      description: "It's a fun world where you can play mini-games, compete in quests, and complete daily challenges. The Arcade world is not part of the storyline here; you are free to do anything."
    },
    {
      name: "The Hub",
      description: "The Hub area is designed for relaxation and socializing with other non-playable characters. It provides a stress-free environment for those who are tired of the usual gameplay."
    },
    {
      name: "Test World",
      description: "It's a practice mode where you can try out new features and mechanics of the game. Test mode is only available for users of the modified APK."
    }
  ]

  const androidSteps = [
    {
      number: "1",
      title: "Visit our Website",
      description: "Visit our Website, Super Bear Adventure Mod APK, and tap on the download button.",
      icon: Globe,
    },
    {
      number: "2",
      title: "Enable Unknown Sources",
      description: "Wait for it to be complete, and then enable the 'Unknown sources' option. To do this, open the Mobile settings, go to Unknown sources, and click Allow permissions.",
      icon: Shield,
    },
    {
      number: "3",
      title: "Find the APK File",
      description: "Now, find the APK file you just downloaded in your gallery download section.",
      icon: FolderSearch,
    },
    {
      number: "4",
      title: "Install the APK",
      description: "Open the file, select the Install option, and click on it.",
      icon: Download,
    },
    {
      number: "5",
      title: "Launch the App",
      description: "Once installed, the game icon will appear on the Mobile home screen. So move back to your home screen and launch the Game.",
      icon: Rocket,
    },
  ]

  const androidRequirements = [
    { label: "Android", value: "6.0 and up", icon: Smartphone },
    { label: "Storage", value: "300 MB Free Space", icon: FolderSearch },
    { label: "RAM", value: "Minimum 2GB of RAM", icon: HardDrive },
    { label: "Internet", value: "Stable Internet Connection", icon: Wifi },
  ]

  const pcSteps = [
    {
      number: "1",
      title: "Install Emulator",
      description: "On PC, you need an emulator that creates a Mobile environment on the window. The emulators you can use for this are Bluestack, Nox Player, or LD Player.",
      icon: Monitor,
    },
    {
      number: "2",
      title: "Download Bluestack",
      description: "Suppose you choose Bluestack, visit the official Bluestack website, and install it on your PC.",
      icon: Download,
    },
    {
      number: "3",
      title: "Download APK File",
      description: "Once the emulator is set up, come to our website, Page Super Bear Adventure Mod APK PC, and download the APK File. The downloaded file will be located in your computer's Download Section.",
      icon: FolderSearch,
    },
    {
      number: "4",
      title: "Install via Emulator",
      description: "Open the emulator, navigate to and browse the file, and tap the Install button.",
      icon: Download,
    },
    {
      number: "5",
      title: "Launch",
      description: "It will take a few seconds to complete. Once done, you can launch the game from the Home screen.",
      icon: Rocket,
    },
  ]

  const pcRequirements = [
    { label: "Windows", value: "Compatible with Windows 7, 8, 9, 10, and 11", icon: Monitor },
    { label: "Emulator", value: "Must Require Emulator", icon: AlertCircle },
    { label: "Storage", value: "Need 1GB of Free space for the APK file and the Emulator", icon: FolderSearch },
    { label: "RAM", value: "4GB of RAM", icon: HardDrive },
    { label: "Internet", value: "Stable Wifi", icon: Wifi },
  ]

  const iosSteps = [
    {
      number: "1",
      title: "Download Installer",
      description: "iOS device users can use the jailbreaking method, which requires installers like App Valley and Panda Helper. Download the installer you are comfortable with and install it on your device.",
      icon: Globe,
    },
    {
      number: "2",
      title: "Allow Permissions",
      description: "Once set, go to Settings > General > Device Management and trust the developer profile of the installer. This will allow the app to run on your Device.",
      icon: Shield,
    },
    {
      number: "3",
      title: "Download APK File",
      description: "Now, return to the installer and download the Super Bear Adventure Mod APK file for iPhone.",
      icon: FolderSearch,
    },
    {
      number: "4",
      title: "Install the File",
      description: "After downloading, it's time to install the APK file. Open the file inside the installer and tap the install button.",
      icon: Download,
    },
    {
      number: "5",
      title: "Launch",
      description: "When the file is installed, you can find the SBA icon on your Home screen. So go there and launch it.",
      icon: Rocket,
    },
  ]

  const iosRequirements = [
    { label: "iOS", value: "iOS 11.0 or Later", icon: Smartphone },
    { label: "RAM", value: "4GB RAM", icon: HardDrive },
    { label: "Storage", value: "500 MB of Storage for the installer and APK file", icon: FolderSearch },
    { label: "Installer", value: "Require installers", icon: AlertCircle },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Comparison Table Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Comparison Table: Super Bear Adventure Mod APK Vs Standard Super Bear Adventure
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here we compare the standard game with the Super Bear Adventure Mod APK to show how features and gameplay differ.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full border-collapse bg-white dark:bg-gray-800">
            <thead>
              <tr className="bg-gradient-to-r from-brown-600 to-brown-600">
                <th className="px-6 py-4 text-left text-white font-bold text-lg border-b-2 border-amber-800">Feature</th>
                <th className="px-6 py-4 text-left text-white font-bold text-lg border-b-2 border-amber-800">Standard Version</th>
                <th className="px-6 py-4 text-left text-white font-bold text-lg border-b-2 border-amber-800">Mod APK</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-900/50' : 'bg-white dark:bg-gray-800'} hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors`}>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">{row.feature}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">{row.standard}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">{row.modApk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Download Guide Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Method to download & install Super Bear Adventure Mod APK for Android, PC, and iPhone
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          As you are aware, our website offers a modified version of the Super Bear adventure, which will be considered a third-party application. It needs a different method from the Play Store and needs some permissions from your device. Follow the guide given below to download and install this Mod APK on your devices precisely.
        </p>
      </div>

      {/* Android Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-green-500 p-3 rounded-lg">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">For Android</h3>
        </div>

        <div className="space-y-6 mb-8">
          {androidSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Android Requirements */}
        <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            Requirement:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {androidRequirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{req.label}:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{req.value}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* PC Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-purple-500 p-3 rounded-lg">
            <Monitor className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">For PC</h3>
        </div>

        <div className="space-y-6 mb-8">
          {pcSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* PC Requirements */}
        <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            Requirement:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pcRequirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <div key={index} className="flex items-center gap-3">
                   
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{req.label}:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{req.value}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* iOS Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-500 p-3 rounded-lg">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">For iPhone/iOS</h3>
        </div>

        <div className="space-y-6 mb-8">
          {iosSteps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* iOS Requirements */}
        <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700">
          <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Requirement:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {iosRequirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">{req.label}:</span>{" "}
                    <span className="text-gray-700 dark:text-gray-300">{req.value}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Levels & Main Antagonist Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Levels & Main Antagonist of Super Bear Adventure Mod APK
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            There are seven regions in Super Bear Adventure Mod APK, each with its Main boss, plot, and new tactics, keeping the gameplay exciting at all times. Here, we will provide you with an overview of each region, allowing you to become familiar with the gameplay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500 dark:bg-amber-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{level.name}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
