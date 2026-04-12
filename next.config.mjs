/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // ─── Domain migration: digitaliqglobal.com → digitaliq.agency ─────────────
  // If both domains point to the same server, this 301-redirects all old traffic.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'digitaliqglobal.com' }],
        destination: 'https://digitaliq.agency/:path*',
        permanent: true, // 301 — passes full link equity to new domain
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.digitaliqglobal.com' }],
        destination: 'https://digitaliq.agency/:path*',
        permanent: true,
      },
      // Redirect www to apex on new domain
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.digitaliq.agency' }],
        destination: 'https://digitaliq.agency/:path*',
        permanent: true,
      },
    ]
  },

  // ─── Security + SEO headers ────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
