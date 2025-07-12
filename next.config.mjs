/**
 * @type {import('next').NextConfig}
 * This config ensures correct asset paths for GitHub Pages static export.
 */
const repo = 'sahil9001.github.io';
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    assetPrefix: isProd ? `/${repo}` : '',
    basePath: isProd ? `/${repo}` : '',
};

export default nextConfig;