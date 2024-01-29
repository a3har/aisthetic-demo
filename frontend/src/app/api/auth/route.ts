import { auth } from "firebase-admin"
import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { customInitApp } from "@/clients/firebase/admin"

// Init the Firebase SDK every time the server is called
customInitApp()

export async function POST(request: NextRequest) {
  const requestParams = await request.json()
  const { type, params } = requestParams

  try {
    switch (type) {
      case "oauth-verify":
        console.log("Oauth verify")
        const decodedToken = await auth().verifyIdToken(params.idToken)
        console.log("Decoded Token", decodedToken)
        if (decodedToken) {
          //Generate session cookie
          const expiresIn = 60 * 60 * 24 * 5 * 1000
          const sessionCookie = await auth().createSessionCookie(
            params.idToken,
            {
              expiresIn,
            }
          )
          console.log("Session Cookie", sessionCookie)
          const options = {
            name: "session",
            value: sessionCookie,
            maxAge: expiresIn,
            httpOnly: true,
            secure: true,
          }

          //Add the cookie to the browser
          cookies().set(options)
        }
        return NextResponse.json({}, { status: 200 })

      case "signout":
        //Remove the value and expire the cookie
        const options = {
          name: "session",
          value: "",
          maxAge: -1,
        }

        cookies().set(options)
        return NextResponse.json({}, { status: 200 })

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
