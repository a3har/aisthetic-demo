"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"

import api from "@/clients/api"
import { auth, provider } from "@/clients/firebase"
import { GoogleIcon } from "@/components/Icons"
import Loader from "@/components/Loaders"
import classNames from "classnames"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const idToken = await user.getIdToken()
          try {
            await api.post("/api/auth", {
              type: "oauth-verify",
              params: {
                idToken,
              },
            })
            router.push("/stores")
          } catch (err) {
            console.log("Error verifying oauth token", err)
          }
        } catch (err) {
          console.log("Error getting id token", err)
        }
      }
    })
  }, [])

  return (
    <div className="h-full w-full flex items-center justify-center p-5">
      <div className="flex flex-col w-full md:w-[30rem] items-center gap-[3.75rem]">
        <h2 className="md:text-[2.5rem] text-xl">Aisthetic Demo</h2>
        {loading ? (
          <Loader.Spinner />
        ) : (
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
                signInWithPopup(auth, provider)
              }
            }}
          >
            <>
              <GoogleIcon className="w-6" />
              <span className="text-xl">Sign In with Google</span>
            </>
          </div>
        )}
      </div>
    </div>
  )
}
