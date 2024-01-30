"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getRedirectResult, signInWithRedirect } from "firebase/auth"

import api from "@/clients/api"
import { auth, provider } from "@/clients/firebase"
import { GoogleIcon } from "@/components/Icons"
import Loader from "@/components/Loaders"
import classNames from "classnames"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred): Promise<void> => {
      if (userCred?.user || auth.currentUser) {
        setLoading(false)
      } else {
        setLoading(false)
        return
      }

      if (!userCred) {
        return
      }

      try {
        const idToken = await userCred.user.getIdToken()
        try {
          await api.post("/api/auth", {
            type: "oauth-verify",
            params: {
              idToken,
            },
          })
        } catch (err) {
          console.log("Error verifying oauth token", err)
        }

        router.push("/stores")
      } catch (err) {
        console.log("Error getting id token", err)
        // TODO: Handle Auth Failure
        await api.post("/api/auth", {
          type: "signout",
          params: {},
        })
      }
    })
  }, [])

  return (
    <div className="h-full w-full flex items-center justify-center p-5">
      <div className="flex flex-col w-full md:w-[30rem] items-center gap-[3.75rem]">
        <h2 className="md:text-[2.5rem] text-xl">Aisthetic Demo</h2>
        <div
          className={classNames(
            "flex flex-row items-center gap-3 w-full border py-2.5 h-[3.125rem] justify-center hover:bg-slate-50 duration-200 transition-colors",
            {
              "cursor-pointer": !loading,
              "cursor-not-allowed": loading,
            }
          )}
          onClick={async () => {
            if (!loading) {
              setLoading(true)
              signInWithRedirect(auth, provider)
            }
          }}
        >
          {loading ? (
            <Loader.Spinner />
          ) : (
            <>
              <GoogleIcon className="w-6" />
              <span className="text-xl">Sign In with Google</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
