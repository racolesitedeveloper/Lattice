import type { NextConfig } from "next";

// In dev, requests from `http://<lan-ip>:3000` are a different “site” than the
// server’s default `localhost` identity. Next.js 16 then blocks fetches to
// `/_next/*` (RSC, chunks, HMR) unless the page origin is allowlisted — which
// looks like an infinite load on a phone. Set NEXT_DEV_LAN_HOST in .env.local
// (e.g. your Wi-Fi IPv4 from `ipconfig`) or run `npm run dev:lan`, which
// auto-detects a private address.
const devLanHosts =
  process.env.NEXT_DEV_LAN_HOST?.split(/[\s,]+/).filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  devIndicators: false,
  ...(devLanHosts.length > 0 ? { allowedDevOrigins: devLanHosts } : {}),
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "@phosphor-icons/react/ssr"],
    // Cache client router payloads briefly so back-navigation stays instant.
    staleTimes: {
      dynamic: 60,
      static: 300,
    },
  },
};

export default nextConfig;
