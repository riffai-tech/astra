import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "RIFFAI - AI-Powered Satellite Solutions",
        template: `%s | RIFFAI`
    },
    description: "AI-powered satellite solutions for monitoring environmental change. Delivering insights with 97% accuracy by integrating over 20 satellites and 800+ parameters.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "RIFFAI - AI-Powered Satellite Solutions",
        description: "AI-powered satellite solutions for monitoring environmental change. Delivering insights with 97% accuracy by integrating over 20 satellites and 800+ parameters.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@riffai",
        title: "RIFFAI - AI-Powered Satellite Solutions",
        description: "AI-powered satellite solutions for monitoring environmental change. Delivering insights with 97% accuracy by integrating over 20 satellites and 800+ parameters.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://riffai.com"),
};