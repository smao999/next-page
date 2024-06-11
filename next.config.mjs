/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
// const repo = 'next-page'
let assetPrefix = '';
let basePath = '';

if(isGithubActions) {
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
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
