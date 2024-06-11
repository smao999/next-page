/** @type {import('next').NextConfig} */

const repo = 'next-page'
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
    assetPrefix,
    basePath,
    output: 'export',
    distDir: "docs"
};

export default nextConfig;
