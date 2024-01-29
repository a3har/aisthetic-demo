import React from "react"
import classNames from "classnames"

import { StoreTimings } from "@/types/store"
import Accordian from "@/components/Accordian"
import { ChevronArrow } from "@/components/Icons"
import { formatTime } from "@/utils/dateTime"

interface StoreTimingsAccordianProps {
  timings: StoreTimings[]
  className?: string
}

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export default function StoreTimingsAccordian({
  timings,
  className,
}: StoreTimingsAccordianProps) {
  return (
    <div className={classNames(className)}>
      <Accordian
        buttonMarkup={({ open }) => {
          return (
            <div className="flex flex-row items-center cursor-pointer md:text-base text-xs">
              <span className="select-none">{getStoreStatus(timings)}</span>
              {timings.length ? (
                <ChevronArrow
                  className={classNames(
                    "ml-1 w-4 h-4 transition-all duration-300 text-gray-700",
                    {
                      "rotate-180": open,
                    }
                  )}
                />
              ) : null}
            </div>
          )
        }}
        defaultOpen={false}
      >
        <div className="flex flex-col gap-2 mt-4 md:text-base text-xs">
          {timings.map((timing) => {
            const {
              day,
              startHour,
              startMinute,
              endMinute,
              endHour,
              isClosed,
            } = timing
            const isToday = day === new Date().getDay()
            return (
              <div
                className={classNames(
                  "flex flex-row items-center justify-start",
                  {
                    "font-base": isToday,
                    "font-thin": !isToday,
                  }
                )}
                key={day}
              >
                <span className="w-[7.5rem]">{DAYS[day]}</span>
                <span className="">
                  {isClosed
                    ? "Closed"
                    : `${formatTime(startHour, startMinute)} - ${formatTime(
                        endHour,
                        endMinute
                      )}`}
                </span>
              </div>
            )
          })}
        </div>
      </Accordian>
    </div>
  )
}

function getStoreStatus(storeTimings: StoreTimings[]) {
  const currentTime = new Date()
  const currentDay = currentTime.getDay()

  if (storeTimings.length === 0) {
    return "Closed Indefinitely"
  }

  for (let timing of storeTimings) {
    if (timing.day === currentDay) {
      if (timing.isClosed) {
        let nextOpenDay = (currentDay + 1) % 7
        if (!storeTimings[nextOpenDay].isClosed) {
          return `Opens ${formatTime(
            storeTimings[nextOpenDay].startHour,
            storeTimings[nextOpenDay].startMinute
          )}`
        }
        while (storeTimings[nextOpenDay].isClosed) {
          nextOpenDay = (nextOpenDay + 1) % 7
        }
        const nextOpenTiming = storeTimings.find(
          (timing) => timing.day === nextOpenDay
        )
        return nextOpenTiming
          ? `Opens ${DAYS[nextOpenDay]} ${formatTime(
              nextOpenTiming.startHour,
              nextOpenTiming.startMinute
            )}`
          : "Closed Indefinitely"
      } else {
        if (timing.startHour === null || timing.endHour === null) {
          return "24-hour open"
        }

        const openingTime = new Date(
          currentTime.getFullYear(),
          currentTime.getMonth(),
          currentTime.getDate(),
          timing.startHour,
          timing.startMinute || 0
        )
        const closingTime = new Date(
          currentTime.getFullYear(),
          currentTime.getMonth(),
          currentTime.getDate(),
          timing.endHour,
          timing.endMinute || 0
        )

        if (currentTime < openingTime) {
          return `Opens ${formatTime(timing.startHour, timing.startMinute)}`
        } else if (currentTime >= openingTime && currentTime < closingTime) {
          return `Closes ${formatTime(timing.endHour, timing.endMinute)}`
        }
      }
    }
  }
}
