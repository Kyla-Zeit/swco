// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/swco',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : undefined,
  trailingSlash: true,
};
export default nextConfig;
