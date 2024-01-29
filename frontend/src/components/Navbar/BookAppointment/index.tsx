import React from "react"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"

import api from "@/clients/api"
import { auth } from "@/clients/firebase"

export default function BookAppointment() {
  const router = useRouter()
  return (
    <div
      className="underline underline-offset-4 cursor-pointer"
      onClick={async () => {
        await signOut(auth)
        await api.post("/api/auth", {
          type: "signout",
          params: {},
        })
        router.push("/login")
      }}
    >
      Book an appointment
    </div>
  )
}
