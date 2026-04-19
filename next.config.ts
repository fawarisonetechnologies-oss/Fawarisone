import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services/mobile-apps", destination: "/services", permanent: true },
      { source: "/services/web-development", destination: "/services", permanent: true },
      { source: "/services/seo-services", destination: "/services", permanent: true },
      { source: "/services/ui-ux-design", destination: "/services", permanent: true },
      { source: "/services/ppc-ads", destination: "/services", permanent: true },
      { source: "/services/cms-development", destination: "/services", permanent: true },
      { source: "/services/:slug", destination: "/services", permanent: true },
      { source: "/blog", destination: "/services#content", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
