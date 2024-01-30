"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { ChevronArrow } from "@/components/Icons"

import Logout from "./Logout"

interface NavbarProps {
  backButtonProps?: {
    href: string
    label: string
  }
}
export default function Navbar({ backButtonProps }: NavbarProps) {
  const router = useRouter()
  const [actionLabelHeight, setActionLabelHeight] = useState<number | null>(
    null
  )

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      if (window.innerWidth > 768) {
        setActionLabelHeight(Math.max(0, 24 - position))
      } else {
        setActionLabelHeight(null)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="sticky top-0 bg-white flex md:justify-between md:items-center md:px-[10.94rem] px-5 md:py-6 py-4 z-40 w-full md:flex-row flex-col gap-8 md:gap-0">
      {!backButtonProps ? (
        <div className="flex md:flex-row md:items-center items-start flex-col gap-8 md:gap-0">
          <div className="w-[11.375rem] font-thin flex flex-col">
            <span
              style={{
                ...(actionLabelHeight !== null
                  ? {
                      height: actionLabelHeight + "px",
                    }
                  : {}),
              }}
              className="overflow-hidden md:text-base text-xs"
            >
              Call us
            </span>
            <span> +1123476778</span>
          </div>
          <div className="w-[11.375rem] font-thin flex flex-col">
            <span
              style={{
                ...(actionLabelHeight !== null
                  ? {
                      height: actionLabelHeight + "px",
                    }
                  : {}),
              }}
              className="overflow-hidden md:text-base text-xs"
            >
              Write to us{" "}
            </span>
            <span>hello@brandname.co</span>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-row items-center cursor-pointer hover:underline underline-offset-4"
          onClick={() => {
            router.push(backButtonProps.href)
          }}
        >
          <ChevronArrow className="w-4 h-4 rotate-90 text-gray-500 " />
          <span className="font-thin">{backButtonProps.label}</span>
        </div>
      )}
      <div className="flex flex-row items-center justify-end">
        <Logout />
      </div>
    </nav>
  )
}
