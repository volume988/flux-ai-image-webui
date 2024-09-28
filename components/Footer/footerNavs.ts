import { siteConfig } from "@/config/site";

const Navs: any[] = [
    {
        label: "Resource",
        items: [
            { title: "FAQ", href: "/#FAQ" },
            { title: "Generation", href: "/image-generator" },
            { title: "Explore", href: "/explore" },
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
                href: `mailto:86rudysteiner@gmail.com`,
                title: `86rudysteiner@gmail.com`,
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
                href: "https://jsonhome.com",
                title: "JSON editor,formatter,comparator",
                content: "JSON online",
            }
        ],
    },
];

export default Navs;
