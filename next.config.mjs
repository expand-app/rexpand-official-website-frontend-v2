/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: process.env.BASE_PATH,
  images: {
    unoptimized: true,
  },
  // publicRuntimeConfig: {
  //   publicDir: '/rexpand-official-website-frontend-v2/public'
  // }
};
export default nextConfig;
