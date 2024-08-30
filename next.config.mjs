/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/sahil9001.github.io' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/sahil9001.github.io' : '',
  };
  
  export default nextConfig;