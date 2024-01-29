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
