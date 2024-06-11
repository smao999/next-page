/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
// const repo = 'next-page'
let assetPrefix = '';
let basePath = '';

if(isProd) {
    const repo = 'next-page';
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
}

const nextConfig = {
    assetPrefix,
    basePath,
    output: 'export',
    distDir: "docs"
};

export default nextConfig;
