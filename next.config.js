/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
console.log("isProd", isProd);
console.log("Data", isProd ? process.env.NEXT_PUBLIC_SITE_URL : "");

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  // images: {
  //   loader: "akamai",
  //   path: "",
  // },
  trailingSlash: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_SITE_URL : "",
};

module.exports = nextConfig;
