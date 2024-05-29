import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/provider/theme-provider'
import { GlobalContextProvider } from '@/context/global-context'
import { Separator } from '@/components/ui/separator'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '300', '400', '700', '900'],
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
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased mx-4 lg:mx-8 xl:mx-24 2xl:mx-64">
        <GlobalContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="-mx-4 lg:-mx-8 xl:-mx-24 2xl:-mx-64">
              <Separator className="mb-4" />
            </div>
            {children}
          </ThemeProvider>
        </GlobalContextProvider>
      </body>
    </html>
  )
}
