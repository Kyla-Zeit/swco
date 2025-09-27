/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'swco'

const nextConfig = {
  // export a static site for GitHub Pages
  output: 'export',

  // make all routes live under /swco in production
  basePath: isProd ? `/${repo}` : '',

  // prefix static assets too (images, css, js)
  assetPrefix: isProd ? `/${repo}/` : '',

  // next/image needs this when exporting
  images: { unoptimized: true },

  // avoids 404s on gh-pages for nested paths
  trailingSlash: true,
}

export default nextConfig
