// next.config.mjs
const repo = 'swco';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ensures Next.js exports static HTML
  images: {
    unoptimized: true, // fixes <Image> issues on GitHub Pages
  },
};

export default nextConfig;
