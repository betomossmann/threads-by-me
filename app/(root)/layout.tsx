import '../globals.css'
import Bottombar from '@/components/shared/bottombar'
import RightSidebar from '@/components/shared/right-sidebar'
import LeftSidebar from '@/components/shared/left-sidebar'
import Topbar from '@/components/shared/topbar'

import React from 'react'
import { Metadata } from 'next'
import { dark } from '@clerk/themes'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BDev Threads',
  description: 'Generated the Future.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  )
}
