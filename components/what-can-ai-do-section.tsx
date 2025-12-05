"use client"

import React from "react"
import { Coins, Heart, Crown, Zap, Ban, Users, ShoppingCart, Key, Award, Sparkles, Shield, MapPin, TrendingUp, Gift } from "lucide-react"

interface Hot51ModFeaturesProps {
  pageType?: "single" | "multi"
}

export function Hot51ModFeatures({ pageType = "single" }: Hot51ModFeaturesProps) {
  const getFeatures = () => {
    const icons = [Coins, Heart, Gift, Zap, Ban, Users, Crown, ShoppingCart, Key, Award, Sparkles, MapPin, TrendingUp, Shield]

    const featuresData = [
      {
        number: "1",
        title: "Unlimited Money and Health",
        description:
          "The most useful perk you can avail from this mod is unlimited in-game currency and health, providing a vital advantage for your journey. With unlimited coins, you can buy anything from Capitalos' shop, like power-ups, costumes, skin, and upgradable vehicles. As you have infinite health, you will never run short of life, and it skips the hassle of playing from the start every time you lose.",
      },
      {
        number: "2",
        title: "Unlimited Tokens",
        description:
          "In Super Bear Adventure Mod APK, tokens are used as a premium currency to buy expensive items and accessories. Luckily, this mod gives you tons of tokens from the beginning, which you can use anytime, any part of the game.",
      },
      {
        number: "3",
        title: "God Mod",
        description:
          "God mode is a feature accessible only to Mod APK users, which unlocks everything. In this mode, you have free access to coins, treasure boxes, and infinite health. Usually, in a simple version, you have three lives, which decrease every time you take damage or fall into a trap, but with god mode, you are immortal.",
      },
      {
        number: "4",
        title: "Coin Injection",
        description:
          "In SBA, there is a feature called Coin Injection, which instantly provides a substantial amount of money. By using this cheat tool, you can fill up your inventory of coins without spending real money or wasting time completing different tasks. You don't have to find treasure boxes or progress on higher levels; just use it and refill your in-game currency.",
      },
      {
        number: "5",
        title: "No Ads",
        description:
          "Moreover, it provides you with the most satisfying and uninterrupted gameplay experience because it has no occasional ads. You will not be disturbed by pop-up ads during the intense gameplay, allowing you to stay focused on your mission of saving the realm.",
      },
      {
        number: "6",
        title: "Double Life Purchased",
        description:
          "A feature of double life is available in both the mod and standard versions. In a simple Super Bear adventure, you can get double life only by using coins, which is quite expensive. But with the help of the mod, you can purchase double life just when you start playing, making a total of 5 lives.",
      },
      {
        number: "7",
        title: "Unlocked All Skins & Hats",
        description:
          "Those who play standard SBA can understand how frustrating and annoying it is to play a game in a single skin, costume, and hat. However, now you have the opportunity to end this frustration, as this beta mod APK gives you all skins and hats unlocked. Choose any skin you love and apply it right away to your character.",
      },
      {
        number: "8",
        title: "Mod Menu",
        description:
          "Here, the Mod menu serves as a hub of expensive premium items and features. It's where you can instantly turn mod features on and off. In the mod Menu, you can unlock coins, tokens, the god menu, skins, Free shopping, and even switch to VIP with all unlocked perks.",
      },
      {
        number: "9",
        title: "Unlocked All Characters",
        description:
          "While the Main character is the only one who is Baaren, there are other characters, such as SBA Bear, Rabbits, Birds, Bees, turtles, and the antagonist. Normally, you can unlock these characters by completing levels and tasks, but in this mode, they are all unlocked.",
      },
      {
        number: "10",
        title: "Hidden Locations",
        description:
          "Since the game is full of suspense and adventure, it features secret places with numerous rewards hidden within, such as loot boxes and treasure chests. While the simple version is all hassle, Mod APK makes it easier by providing hints or exact directions to the location.",
      },
      {
        number: "11",
        title: "Free Shopping",
        description:
          "In the game, there is a shop called Capitalos, where you can purchase a variety of items, including costumes, skins, outfits, and Tropia tokens. To buy these items, you can use two options: one is to use the unlimited coins you have, and the other is to unlock the free shopping feature from the Mod Menu. The Most premium items of the shop are: Skins, Bear Outfits (Night, Summer, Rapper, Sheriff), Tokens, Treasure Box.",
      },
      {
        number: "12",
        title: "Increase Strength",
        description:
          "In your survival journey, you will face a lot of deadly and powerful enemies that can only be defeated with strength and strategy. Fortunately, the mod version boosts bear power and provides more hitting power compared to the standard version. With this increased strength, you can dominate enemies easily, even the Main bosses.",
      },
      {
        number: "13",
        title: "Unlock Keys & Collect Loot Boxes",
        description:
          "As missions, quests, and daily tasks are part of the game, some missions require keys to unlock different rewards like lootboxes. If you play a simple game, you have to complete missions and explore places to get these keys, but with the mod, you have all the keys unlocked and available from the start.",
      },
      {
        number: "14",
        title: "All Stickers Unlocked",
        description:
          "Stickers are also a fun part of the game, and you can find them in every region of the kingdom. However, the best part is that you don't have to put much effort into collecting them, as the mod version has it all. You can even unlock advanced region stickers without having to reach those levels first.",
      },
      {
        number: "15",
        title: "Improved Jumping Ability & Strength",
        description:
          "The Super Bear Adventure Mod APK is loaded with beautiful yet treacherous places, and some require climbing on mountains. Therefore, using this APK can prove ideal as it provides you with power-ups, special items, and high Jump ability. With improved jumping ability, you can climb mountains efficiently and explore every corner of the kingdom.",
      },
    ]

    return featuresData.map((feature, index) => ({
      ...feature,
      icon: icons[index % icons.length]
    }))
  }

  const features = getFeatures()

  return (
    <section className="max-w-7xl mx-auto mb-20">
      <h2 className="text-center font-extrabold text-3xl mb-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
        Features of Super Bear Adventure Mod APK
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto px-4 leading-relaxed">
        The modified version of Super Bear Adventure Mod APK comes with numerous premium features that make the gameplay convenient and rich in resources from the start. Here, we will explore these features in depth to know what's inside them so that every player can take advantage of them.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature) => {
          const IconComponent = feature.icon
          return (
            <article key={feature.number} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 space-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl font-black text-gray-300 dark:text-gray-600 opacity-30 select-none pointer-events-none">
                {feature.number}
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-brown-500 p-2 rounded-lg">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">{feature.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}