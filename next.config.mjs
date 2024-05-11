/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: process.env.NODE_ENV === 'production'? '/rexpand-official-website-frontend-v2' : null,
  images: {
    unoptimized: true,
  },

  publicRuntimeConfig: {
    publicDir: '/rexpand-official-website-frontend-v2/public'
  }
};

export default nextConfig;
