"use client"
import React, { useEffect, useState } from "react"
import {
  QueryClientProvider,
  QueryClient,
  MutationCache,
  QueryCache,
} from "@tanstack/react-query"

export default function Providers({ children }) {
  const [queryClient] = useState(
    new QueryClient({
      queryCache: new QueryCache(),
      mutationCache: new MutationCache(),
      defaultConfig: {
        queries: {
          staleTime: Infinity,
          cacheTime: 60 * 60 * 1000, // in ms
          retry: false,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
