const ENVIRONMENT = process.env.NODE_ENV || "development"

const APP_CLIENT_DOMAIN = process.env.APP_CLIENT_DOMAIN

const PORT = parseInt(process.env.PORT || 3010)

const DB = {
  URI: process.env.DATABASE_URL || "mongodb://localhost/aisthetic-demo",
  CA_CERT: process.env.DB_CA_CERT,
}

const AUTH = {
  JWT_SECRET: process.env.AUTH_JWT_SECRET || "secret",
  JWT_EXPIRY_THRESHOLD: parseInt(
    process.env.AUTH_JWT_EXPIRY_THRESHOLD || 60 * 60 * 24 * 30
  ), // 30 days
}

export { ENVIRONMENT, APP_CLIENT_DOMAIN, PORT, DB, AUTH }
