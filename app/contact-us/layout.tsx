import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
  description: "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://superbearadv.com/contact-us",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://superbearadv.com/contact-us",
    siteName: "Super Bear Adventure Mod APK",
    title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
    description: "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Bear Adventure Mod APK 12.0.4 Unlimited Money & Health",
    description: "Download Super Bear Adventure Mod APK with Mod Menu, God Mode & all regions unlocked for unlimited coins, skins, health & fun all for free.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
