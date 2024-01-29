import express from "express"
import logger from "morgan"
import cors from "cors"
import * as dotenv from "dotenv"

import { mongoConnection } from "../common/db.js"
import "../common/firebase.js"
import { PORT, ENVIRONMENT } from "../Config.js"
import { verifyToken } from "./middlewares/auth.js"
import { SeedStores } from "./seed.js"
import storeRouter from "./routers/store.js"

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({})

const orchestrator = express()

const isProd = ENVIRONMENT === "production"

// Allow origin from prod/staging domains
const corsDomains = []

if (!isProd) {
  // Config for Development
  orchestrator.use(logger("dev"))
  orchestrator.use(
    cors({
      origin: "http://localhost:3000",
    })
  )
} else {
  // Config for Production
  orchestrator.use(logger("combined"))
  orchestrator.use(
    cors({
      origin: corsDomains,
    })
  )
  // TODO Setup Sentry
  // TODO Setup New Relic
}

// Execute seeders
await SeedStores()

// Use JSON
orchestrator.use(express.json())

// Setup routers
orchestrator.use("/api/store", verifyToken, storeRouter)

// Health check
orchestrator.use("/health", (req, res) => {
  return res.status({ status: "OK" })
})

orchestrator.listen(PORT, () => {
  console.log(`Orchestrator listening on port ${PORT}`)
})
