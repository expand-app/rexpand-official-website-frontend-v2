/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", 

  basePath: process.env.BASE_PATH,
  images: {
    unoptimized: true,
  },
  pageExtensions: [ 'jsx', 'tsx'],
  env:{
    APP_ENV: process.env.APP_ENV,  // 从环境变量中获取 NODE_ENV 的值
  }
};
export default nextConfig;
