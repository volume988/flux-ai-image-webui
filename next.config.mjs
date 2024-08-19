/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";
// import remarkFrontmatter from 'remark-frontmatter';
// import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
// const withMDX = require('@next/mdx')()

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        // jsx: true,
        // remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        // rehypePlugins: [],
    },
});

const nextConfig = {
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
    typescript: {
        // !! 警告 !!
        // 允许在生产构建过程中成功完成，即使项目存在类型错误。
        // !! 警告 !!
        ignoreBuildErrors: true,
    },
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withNextIntl(withMDX(nextConfig));
