"use client"

export function FAQSection() {
  const faqs = [
    {
      question: "Is Super Bear Adventure Mod APK safe to play?",
      answer:
        "Yes, it's safe and free from malware issues, providing a smooth and reliable adventure experience. However, it's important to download it from a trusted source like our website.",
    },
    {
      question: "Is Super Bear Adventure Mod APK a kids' game?",
      answer:
        "It is best known for its engaging storyline and adventurous gameplay, which is safe for every age gamer. It has no adult content, and Kids can enjoy different characters of the game.",
    },
    {
      question: "What happens to Barren's brother in Super Bear Adventure?",
      answer:
        "Mindless bees also captured barren brother Bim Bim, and he is the first character you will rescue. Bim bim is also a main part of the storyline.",
    },
    {
      question: "How to update the latest version of Super Bear Adventure Mod APK?",
      answer:
        "The update method is similar to the download method. If you are using the old version, simply download the latest version from our website and install it on the previous version.",
    },
    {
      question: "Is everything unlocked in this modified version?",
      answer:
        "Yes, it comes with all unlocked features, including unlimited money, coins, costumes, skins, outfits, and treasure boxes.",
    },
    {
      question: "Can we play the game offline?",
      answer:
        "While the whole gameplay is not offline, there are some modes you can play without having an internet connection.",
    },
    {
      question: "Does this version offer Multiplayer mode?",
      answer:
        "Yes, it's the latest version of SBA beta, featuring a newly introduced Multiplayer mode. Now, make friends, compete on leaderboards, and trade items.",
    },
    {
      question: "Is the backroom in Super Bear Adventure real?",
      answer:
        "Yes, it's a spooky, hidden place where the main antagonist is the backroom monster.",
    },
    {
      question: "What are the different types of power-ups in Super Bear Adventure Mod APK?",
      answer:
        "In the world of Super Bear Adventure, you can find a variety of special power-ups. These include items that give you temporary invincibility, a speed boost, and health restoratives.",
    },
  ]

  return (
    <section className="max-w-5xl mx-auto p x-4 mb-20 mt-7">
      <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-10 text-gray-900 dark:text-white">
        FAQs
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item border-b border-gray-200 dark:border-gray-700 pb-3">
            <summary className="font-semibold cursor-pointer text-lg hover:text-brown-500 transition-colors text-gray-900 dark:text-white">
              {faq.question}
            </summary>
            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}