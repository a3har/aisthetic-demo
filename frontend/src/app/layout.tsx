import type { Metadata } from "next"
import classNames from "classnames"
import { Roboto } from "next/font/google"

import Providers from "@/components/Providers"

import "./globals.css"

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400", "900"] })

export const metadata: Metadata = {
  title: "Aisthetic Demo",
  description: "A demo for Aisthetic",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={classNames(roboto.className, "h-full")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
