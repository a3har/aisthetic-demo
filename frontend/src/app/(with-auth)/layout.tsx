import React from "react"
import { redirect } from "next/navigation"
import Navbar from "@/components/Navbar"

interface WithAuthLayoutProps {
  children: React.ReactNode
}
export default async function WithAuthLayout({
  children,
}: WithAuthLayoutProps) {
  return <div className="h-full w-full relative">{children}</div>
}
