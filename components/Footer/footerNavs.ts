import { siteConfig } from "@/config/site";

const Navs: any[] = [
    {
        label: "Resource",
        items: [
            { title: "FAQ", href: "/#FAQ" },
            { title: "Generation", href: "/ai-image-generator" },
            { title: "Explore", href: "/explore-image" },
            { title: "Pricing", href: "/pricing" },
        ],
    },
    {
        label: "Legal",
        items: [
            // { title: "Discover", href: "/discover" },
            {
                href: "/privacy-policy",
                title: "Privacy Policy",
            },
            {
                href: "/terms-of-service",
                title: "Terms & Conditions",
            },
        ],
    },
    {
        label: "Support",
        items: [
            {
                href: `mailto:support@${siteConfig.domain}`,
                title: `support@${siteConfig.domain}`,
            },
        ],
    },
    {
        label: "Friends",
        items: [
            {
                href: "https://fluximage.org",
                title: "Flux Image AI",
                content: "Flux Image AI",
            },
            {
                href: "https://liveportraitai.com",
                title: "LivePortrait AI Animation Generator",
                content: "LivePortrait AI",
            },
            {
                href: "https://imagetoprompt.club",
                title: "Image To Prompt",
                content: "Image To Prompt",
            },
        ],
    },
];

export default Navs;
