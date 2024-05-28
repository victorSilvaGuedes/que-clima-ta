import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/provider/theme-provider'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['200', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'que clima tá',
  description: 'Aplicativo para informações sobre o clima',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-nunito antialiased mx-4 lg:mx-8 xl:mx-24 2xl:mx-64">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
