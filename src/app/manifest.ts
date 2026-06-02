import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Scalix Web Agency — Premium Web Development & Design',
    short_name: 'Scalix',
    description:
      'We build premium, scalable, and high-performance websites and web applications for businesses and creators. MERN, Next.js, UI/UX, SEO, and hosting.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0d0d59',
    theme_color: '#ff6200',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
    ],
  }
}
