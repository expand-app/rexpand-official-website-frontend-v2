/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: process.env.BASE_PATH,
  images: {
    unoptimized: true,
  },
  pageExtensions: [ 'jsx', 'tsx'],
};
export default nextConfig;
