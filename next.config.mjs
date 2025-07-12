/**
 * @type {import('next').NextConfig}
 * This config ensures correct asset paths for GitHub Pages static export.
 */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    assetPrefix: '',
    basePath: '',
};

export default nextConfig;