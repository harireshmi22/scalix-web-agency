import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Scalix Website Development Agency',
    short_name: 'Scalix',
    description:
      'Scalix builds premium, scalable, SEO-friendly websites and web applications using Next.js, React, MERN stack, UI/UX design, hosting, and deployment.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#0d0d59',
    theme_color: '#ff6200',
    categories: ['business', 'productivity', 'web development', 'design'],
    icons: [
      {
        src: '/icon.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/icon.jpeg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any',
      },
      {
        src: '/icon.jpeg',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}