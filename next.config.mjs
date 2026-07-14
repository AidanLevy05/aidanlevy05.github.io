/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served from GitHub Pages.
  output: "export",
  // GitHub Pages is a static host with no Image Optimization API.
  images: { unoptimized: true },
  // Emit /section/index.html style routes; plays nicely with static hosting.
  trailingSlash: true,
  // This is a user page (aidanlevy05.github.io) served from the domain root,
  // so no basePath / assetPrefix is required.
};

export default nextConfig;
