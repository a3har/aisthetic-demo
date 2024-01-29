/** @type {import('next').NextConfig} */
const withSvgr = require("next-plugin-svgr")

const { webpack } = withSvgr()

const nextConfig = {
  webpack,
  //   eslint: {
  //     ignoreDuringBuilds: true,
  //   },
  //   typescript: {
  //     // !! WARN !!
  //     // Dangerously allow production builds to successfully complete even if
  //     // your project has type errors.
  //     // !! WARN !!
  //     ignoreBuildErrors: true,
  //   },
}

module.exports = nextConfig
