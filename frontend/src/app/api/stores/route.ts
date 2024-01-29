import { NextRequest, NextResponse } from "next/server"

import server from "@/clients/server"

export async function POST(request: NextRequest) {
  const requestParams = await request.json()
  const { type, params } = requestParams

  try {
    switch (type) {
      case "list":
        return server.post("/store/")
      case "details":
        return server.get(`/store/${params.id}`)
      default:
        return NextResponse.json(
          {
            error: "Invalid request",
          },
          {
            status: 400,
          }
        )
    }
  } catch (err) {
    return NextResponse.json(
      {
        error: err,
      },
      {
        status: 500,
      }
    )
  }
}

const DUMMY_STORES = [
  {
    id: "1",
    name: "Indiranagar Branch",
    address: {
      street: "100 Feet Road",
      city: "Bangalore",
      province: "Karnataka",
      country: "India",
    },
    phone: {
      countryCode: "+91",
      number: "9992526394",
    },
    email: "hello@indiranagar.co",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
    timings: [
      {
        day: 0,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
      {
        day: 1,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 2,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 3,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 4,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 5,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 6,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
    ],
  },
  {
    id: "2",
    name: "Basavanagudi Branch",
    address: {
      street: "100 Feet Road",
      city: "Bangalore",
      province: "Karnataka",
      country: "India",
    },
    phone: {
      countryCode: "+91",
      number: "9992526394",
    },
    email: "hello@basavanagudi.co",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
    timings: [
      {
        day: 0,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
      {
        day: 1,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 2,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 3,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 4,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 5,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 6,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
    ],
  },
  {
    id: "3",
    name: "Koramangala Branch",
    address: {
      street: "100 Feet Road",
      city: "Bangalore",
      province: "Karnataka",
      country: "India",
    },
    phone: {
      countryCode: "+91",
      number: "9992526394",
    },
    email: "hello@kormangala.co",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
    timings: [
      {
        day: 0,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
      {
        day: 1,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 2,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 3,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 4,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 5,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 6,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
    ],
  },
  {
    id: "4",
    name: "Jayanagar Branch",
    address: {
      street: "100 Feet Road",
      city: "Bangalore",
      province: "Karnataka",
      country: "India",
    },
    phone: {
      countryCode: "+91",
      number: "9992526394",
    },
    email: "hello@jayanagar.co",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
    timings: [
      {
        day: 0,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
      {
        day: 1,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 2,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 3,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 4,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 5,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 6,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
    ],
  },
  {
    id: "5",
    name: "Bannerghatta Branch",
    address: {
      street: "100 Feet Road",
      city: "Bangalore",
      province: "Karnataka",
      country: "India",
    },
    phone: {
      countryCode: "+91",
      number: "9992526394",
    },
    email: "hello@bannerghatta.co",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed ac scelerisque sed feugiat pellentesque sed. Erat vitae cras eleifend consequat euismod eu lorem quis ut. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc. Id netus vestibulum id habitasse arcu enim nibh. Ornare viverra risus felis amet odio neque amet in nunc.",
    timings: [
      {
        day: 0,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
      {
        day: 1,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 2,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 3,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 4,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 5,
        startHour: 9,
        startMinute: 30,
        endHour: 21,
        endMinute: 30,
        isClosed: false,
      },
      {
        day: 6,
        startHour: null,
        startMinute: null,
        endHour: null,
        endMinute: null,
        isClosed: true,
      },
    ],
  },
]
