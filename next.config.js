/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: '/',
  assetPrefix: process.env.NODE_ENV === "production" ? "https://studydrome.com/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfkpAsrAAAAAL1nOp4xRZtBggO8oWEE4CKzwGaO",
  }
};

module.exports = nextConfig;
