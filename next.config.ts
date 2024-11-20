import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api", "import"],
  },
  webpack: (config) => {
    config.resolve.alias["jotai"] = path.resolve(__dirname, "node_modules/jotai");
    return config;
  },
};

export default nextConfig;
