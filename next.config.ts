import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/business-site",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {

                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
