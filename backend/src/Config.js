const ENVIRONMENT = process.env.NODE_ENV || "development"

const PORT = parseInt(process.env.PORT || 3010)

const DB = {
  URI: process.env.DATABASE_URL || "mongodb://localhost/aisthetic-demo",
  CA_CERT: process.env.DB_CA_CERT,
}

export { ENVIRONMENT, PORT, DB }
