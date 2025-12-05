"use client"

import React from 'react'

interface Review {
  name: string
  date: string
  rating: string
  review: string
}

interface UserReviewsSectionProps {
  lang?: string
  pageType?: "single" | "multi" | "faceshape"
}

export function UserReviewsSection({ lang = "es", pageType = "single" }: UserReviewsSectionProps) {
  const reviews: Review[] = [
    {
      name: "Deborah Richardson",
      date: "August 25, 2025",
      rating: "★★★★★",
      review: "It's amazing. There are five levels. Turtletown, Snow Valley, Beemothep dessert, giant house, and the Hive. It boasts amazing graphics and immense potential. It is totally free, and you can get legendary for only £5. You can buy things from the shop to customise your outfit, and they are totally free. Oh, and I almost forgot to mention. THERE ARE BACKROOMS."
    },
    {
      name: "Ann Gel Lyn",
      date: "August 3, 2025",
      rating: "★★★★★",
      review: "I just spent the last weekend playing Super Bear Adventure with my friends, and I gotta say, it's a real hoot! This game is all about saving people and completing quests, and let me tell you, it's a wild ride. The gameplay is super fun and engaging. You get to explore this beautiful world, save people from all sorts of danger, and collect rewards. The quests are varied and challenging, and you'll need to use all your skills and strategy to complete them."
    },
    {
      name: "Audrey Loyola",
      date: "August 7, 2025",
      rating: "★★★★★",
      review: "A really good game, especially since it's offline and free to play. Also, a great way to pass the time! It's basically an adventure game (you can customize your characters, grind for coins, etc.), and what I like most about it is that it has a story and plot! Really great. The controls & camera are really hard to work with on mobile, but overall it's still good. Would recommend it!"
    }
  ]

  return (
    <section className="max-w-6xl mx-auto my-20 px-4">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-gray-900 dark:text-white">
        Personal Experience and User Reviews About SBA
      </h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
        If I have to say something based on my experience, as I've played the game personally, then it's the best 3D adventure game. The thing I love the most about SBA is the storyline of saving friends and family in the kingdom. Its green environment, beautiful mountains, and soulful characters give a realistic feel of life. My personal experience is supported by what many others are saying, as players worldwide are sharing their thoughts about the game. Check below:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <article
            key={index}
            className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 relative border-2 border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {review.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {review.date}
              </p>
            </div>
            <p className="text-yellow-500 dark:text-yellow-400 text-xl mb-3 select-none">
              {review.rating}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {review.review}
            </p>
            <span className="absolute top-6 right-6 text-6xl text-amber-300 dark:text-amber-700 opacity-20 font-serif select-none">"</span>
          </article>
        ))}
      </div>
    </section>
  )
}
