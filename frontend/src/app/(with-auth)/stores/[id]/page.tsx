"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"

import api from "@/clients/api"
import Navbar from "@/components/Navbar"
import { ChevronArrow } from "@/components/Icons"
import Accordian from "@/components/Accordian"
import classNames from "classnames"
import { StoreTimings } from "@/types/store"
import { DAYS } from "@/constants/days"
import { formatTime } from "@/utils/dateTime"
import StoreTimingsAccordian from "@/components/StoreTimings"

interface StoreDetailsPageProps {
  params: {
    id: string
  }
}

export default function StoreDetailsPage({
  params: { id: storeId },
}: StoreDetailsPageProps) {
  const storeDetailsQuery = useQuery({
    queryKey: ["storeDetails", storeId],
    queryFn: () => {
      return api.post("/api/stores", {
        type: "details",
        params: {
          id: storeId,
        },
      })
    },
  })

  const store = storeDetailsQuery.data?.store || {}

  const { id, name, address, image, phone, email, description, timings } = store

  return (
    <div>
      <Navbar
        backButtonProps={{
          href: "/stores",
          label: "Back to all stores",
        }}
      />
      <div className="md:py-28 py-12 md:px-[10.94rem] px-5">
        {storeDetailsQuery.isLoading ? (
          <div className="flex md:flex-row w-full flex-col md:gap-3 gap-6 md:items-center">
            <div className="flex-1 md:h-[40.3125rem] min-h-[26.5rem] h-[26.5rem] group relative bg-gray-200 animate-pulse"></div>
            <div className="flex-1 h-full flex md:justify-center md:items-center ">
              <div className="flex flex-col items-start md:pl-[4.625rem] w-full gap-6">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="text-4xl bg-gray-200 h-10 rounded-md w-full animate-pulse"></div>
                  <p className="font-thin bg-gray-200 h-40 rounded-md w-full animate-pulse"></p>
                </div>
                <div className="flex flex-row gap-4 w-full">
                  <div className="flex flex-col gap-4 w-full">
                    <h6 className="bg-gray-200 h-10 rounded-md w-full animate-pulse"></h6>
                    <div className="flex flex-col bg-gray-200 h-20 rounded-md w-full animate-pulse"></div>
                    <div className="flex flex-col bg-gray-200 h-40 rounded-md w-full animate-pulse"></div>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <h6 className="bg-gray-200 h-10 rounded-md w-full animate-pulse"></h6>
                    <div className="flex flex-col bg-gray-200 h-20 rounded-md w-full animate-pulse"></div>
                    <div className="flex flex-col bg-gray-200 h-64 rounded-md w-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex md:flex-row flex-col gap-6 w-full md:gap-3"
            key={id}
          >
            <div className="flex-1 group relative ">
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
            </div>
            <div className="flex-1 h-[40.3125rem] flex justify-center items-center">
              <div className="flex flex-col items-start md:pl-[4.625rem] gap-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="md:text-4xl text-2xl">{name}</div>
                  <p className="font-thin md:text-base text-xs">
                    {description}
                  </p>
                </div>
                <div className="flex md:flex-row flex-col md:gap-4 gap-6">
                  <div className="flex flex-col gap-4">
                    <h6 className="w-48">Contact Details</h6>
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
                  <div className="flex flex-col gap-4">
                    <h6 className="">Store Timings</h6>
                    <StoreTimingsAccordian timings={timings} className="h-64" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
