"use client";
import { useState, useEffect } from "react";
import { Shield, Users, Star, Share , Zap, Coins, Download, Crown } from "lucide-react"
import Link from 'next/link';

export default function PlayStoreStyleApp() {
  
const images = [
  "images/Mobile frame images/download-super-bear-adventure-mod-apk.webp",
  "images/Mobile frame images/mod-apk-super-bear-adventure.webp",
  "images/Mobile frame images/super-bear-adventure-beta-mod-apk.webp",
  "images/Mobile frame images/super-bear-adventure-mod-apk-unlocked-all.webp",
  "images/Mobile frame images/super-bear-adventure-mod-apk.webp",
];

const [currentImage, setCurrentImage] = useState(0);
const [fade, setFade] = useState(true);

useEffect(() => {
  const interval = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300); // fade out before switching
  }, 2000);

  return () => clearInterval(interval);
}, []);


  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health',
        text: 'Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section className="">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left Content */}
            <div className="flex-1 text-gray-900 dark:text-gray-100">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:leading-[1.2] leading-[1.2]">
             Download Super Bear Adventure Mod APK v12.0.4 Mod Menu + Unlocked All
              </h1> 
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
           The search for your next great adventure is over. Welcome to Super Bear Adventure, a charming 3D platformer game inspired by 90s themes. The game revolves around a kingdom with seven different regions, and every region has its secrets, enemies, and challenges to overcome. It is offered by Earthquake Games and has over 100 million downloads on the Play Store, with a 4.5-star rating. While everything is perfect, the standard version does have its limitations, such as having to deal with ads and making purchases to unlock all regions.

             </p>

              {/* App Info Row */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-white dark:bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    src="images/favicon.webp"
                    alt="Game Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xl font-bold">4.7</span>
                      <Star className="w-4 h-4 fill-brown-400 text-brown-400" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">21.2M reviews</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl font-bold mb-1">1M+</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Downloads</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <span className="text-sm bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-gray-800 dark:text-white">3+</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Rated for 3+</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link 
                  href="/download"
                  className="bg-brown-500 hover:bg-brown-600 dark:bg-brown-600 dark:hover:bg-brown-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download now
                </Link>
                
                <button 
                  onClick={handleShare}
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Share className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>

              {/* Device Compatibility */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="w-4 h-4 border border-gray-400 dark:border-gray-500 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-sm"></div>
                </div>
                <span>This app is available for your device</span>
              </div>

             {/* Security Features */}
<div className="flex flex-wrap items-center gap-4">
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
    <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
      <Coins className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Unlimited Money</span>
  </div>

  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
      <Crown className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">All Skins Unlocked</span>
  </div>

  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
      <Zap className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">God Mode</span>
  </div>

  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
      <Shield className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">No Ads</span>
  </div>

  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
      <Download className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Free Download</span>
  </div>
</div>
            </div>

            {/* Right Content - Mobile Image */}
            <div className="flex-1 lg:max-w-md">
              <div className="flex justify-center">
           <img
  src={images[currentImage]}
  alt="Mobile App Screenshot"
  className="h-auto"
  style={{
    maxWidth: "389px",
    opacity: fade ? 1 : 0,
    transition: "opacity 0.5s ease-in-out",
  }}
/>


              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Additional Info Section */}
<div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-gray-900 dark:text-gray-100"> 
<p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
 But these restrictions only work until you use the Super Bear Adventure Mod APK, which comes with all unlocked regions, premium features, and the Mod menu. With this SBA Beta Mod APK, you can access unlimited money, Coins, all skins, and free shopping perks, which makes the gameplay exciting and Hassle-free. It also comes with unlimited health and no occasional ads, so that you can enjoy its open-world adventure to its full potential.
</p>
      
      {/* App Details */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-sm">
        <div>
          <span className="font-semibold mb-2 block">Version</span>
          <p className="text-gray-600 dark:text-gray-400">12.0.4</p>
        </div>
        <div>
          <span className="font-semibold mb-2 block">Size</span>
          <p className="text-gray-600 dark:text-gray-400">205 MB</p>
        </div>
        <div>
          <span className="font-semibold mb-2 block">Requirements</span>
          <p className="text-gray-600 dark:text-gray-400">Android 6.0+</p>
        </div>
      </div>
    </div>
  </div>
</div>



    </section>
  );
}