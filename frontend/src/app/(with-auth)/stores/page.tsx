"use client"

import React, { useEffect, useRef } from "react"
import classNames from "classnames"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

import api from "@/clients/api"
import { Store } from "@/types/store"
import Navbar from "@/components/Navbar"
import StoreTimingsAccordian from "@/components/StoreTimings"

import "./styles.css"

export default function StoresListPage() {
  const storesListQuery = useQuery({
    queryKey: ["storesList"],
    queryFn: async () => {
      return api.post("/api/stores", {
        type: "list",
        params: {},
      })
    },
  })

  const stores = storesListQuery.data?.stores || []

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    })
    const fadeIns = document.querySelectorAll(".fade-in")
    fadeIns.forEach((fadeIn) => {
      observer.observe(fadeIn)
    })

    return () => {
      observer.disconnect()
    }
  }, [stores])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full h-full md:gap-28 gap-12 md:py-28 py-12 md:px-[10.94rem] px-5">
        {storesListQuery.isLoading ? (
          <div className="flex md:flex-row w-full md:gap-3 gap-6  md:items-center flex-col">
            <div className="flex-1 md:h-[38rem] min-h-[26.5rem] h-[26.5rem] group relative cursor-pointer bg-gray-200 animate-pulse"></div>
            <div className="flex-1 h-full flex md:justify-center ">
              <div className="flex flex-col items-start w-[24.75rem] gap-6">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="text-2xl hover:underline underline-offset-4 cursor-pointer bg-gray-200 h-10 animate-pulse w-full rounded-md"></div>
                  <div className="flex flex-col bg-gray-200 h-20 w-full rounded-md animate-pulse"></div>
                  <div className="flex flex-col bg-gray-200 h-10 w-full rounded-md animate-pulse"></div>
                </div>
                <div className="flex flex-row items-center justify-between cursor-pointer bg-gray-200 h-10 w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          stores.map((store: Store) => {
            const { id, name, address, image, phone, email, timings } = store
            return (
              <div
                className="flex md:flex-row w-full md:gap-3 gap-6 flex-col md:items-center fade-in"
                key={id}
              >
                <Link
                  href={`/stores/${id}`}
                  className="flex-1  group relative cursor-pointer"
                >
                  <img
                    src={image}
                    alt={name}
                    className="object-cover md:h-[40.3125rem] min-h-[26.5rem] h-[26.5rem] w-full transition-opacity duration-300 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-70 transition-opacity duration-300 500 ease-in-out opacity-0 group-hover:opacity-100">
                    <span className="text-3xl font-black text-black text-opacity-20 w-[21.125rem] text-center">
                      {name}
                    </span>
                  </div>
                </Link>
                <div className="flex-1 flex md:justify-center md:items-center ">
                  <div className="flex flex-col items-start w-[24.75rem] gap-6">
                    <div className="flex flex-col items-start gap-4">
                      <Link
                        href={`/stores/${id}`}
                        className="text-2xl hover:underline underline-offset-4 cursor-pointer"
                      >
                        {name}
                      </Link>
                      <div className="flex flex-col md:text-base text-xs">
                        <span className="font-thin">{address.street}</span>
                        <span className="font-thin">{address.city}</span>
                        <span className="font-thin">{address.province}</span>
                        <span className=" font-thin">{address.country}</span>
                      </div>
                      <div className="flex flex-col md:text-base text-xs">
                        <span className="font-thin">{`${phone.countryCode}${phone.number}`}</span>
                        <span className="font-thin">{email}</span>
                      </div>
                    </div>
                    <StoreTimingsAccordian timings={timings} />
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
