import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YouTube Channel Authenticity Verifier',
  description: 'Verify real YouTube channels vs algorithm gaming. Detect fake engagement and identify authentic content creators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b71da0a7-033a-4180-974c-88b09f308432"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
