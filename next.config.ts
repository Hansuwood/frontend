import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 사이트 생성 최적화
  output: 'standalone',

  // 이미지 최적화 설정
  images: {
    unoptimized: false,
    domains: ['hansu2040.com', 'www.hansu2040.com']
  },

  // 트레일링 슬래시 처리
  trailingSlash: false,

  // 리다이렉트 설정
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // 리라이트 설정 (SPA 라우팅 지원)
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },

  // 헤더 설정
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
