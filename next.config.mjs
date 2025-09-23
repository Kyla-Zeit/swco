/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/swco",        // 👈 your repo name
  assetPrefix: "/swco/",    // 👈 prefix static assets with repo name
};

export default nextConfig;
