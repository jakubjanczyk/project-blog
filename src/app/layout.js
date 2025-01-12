import React from 'react'
import { Spline_Sans_Mono, Work_Sans, } from 'next/font/google'
import clsx from 'clsx'

import { DARK_TOKENS, LIGHT_TOKENS } from '@/constants'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './styles.css'
import WithMotionPreference from '@/components/WithMotionPreference'
import { cookies } from 'next/headers'

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
})
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
})

function RootLayout({ children }) {
  const savedTheme = cookies().get('color-theme');
  const theme = savedTheme?.value || 'light';

  return (
    <WithMotionPreference>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
      <body>
      <Header initialTheme={theme} />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
    </WithMotionPreference>
  )
}

export default RootLayout
