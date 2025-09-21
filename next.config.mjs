// next.config.mjs
const repo = 'swco';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // produce static files
  basePath: `/${repo}`,          // project pages live at /swco
  assetPrefix: `/${repo}/`,      // fix asset URLs (CSS/JS/images)
  images: { unoptimized: true }, // required for export with next/image
  trailingSlash: true            // friendlier with GitHub Pages
};
export default nextConfig;
