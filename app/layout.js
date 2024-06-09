import './globals.css'

import localFont from 'next/font/local'

export const clash = localFont({ src: '../public/fonts/clash.ttf' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>UiFry</title>
        <meta name='description' content='Description' />
      </head>
      <body className={clash.className}>{children}</body>
    </html>
  )
}
