import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Image optimization — WebP/AVIF auto conversion
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },

  // ✅ Compression
  compress: true,

  // ✅ Production optimizations
  poweredByHeader: false,

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
        // ✅ Long cache for static assets
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // ✅ Cache images
        source: "/(.*)\\.(png|jpg|jpeg|svg|webp|avif|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, must-revalidate" },
        ],
      },
      {
        // ✅ Security + performance headers
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
