import fs from "fs"
import path from "path"
import mongoose from "mongoose"
import { DB } from "../Config.js"

const MONGO_URI = DB.URI || ""
const CA_CERT = DB.CA_CERT

// Let app crash if the mongo connection is not there.
let options = {}
if (CA_CERT) {
  let mongoCertPath = path.resolve("./mongo-ca-certificate.crt")
  fs.writeFileSync(mongoCertPath, CA_CERT)
  options = {
    ssl: true,
    sslCA: mongoCertPath,
    sslValidate: true,
    tlsAllowInvalidCertificates: true,
  }
}
const mongoConnection = await mongoose.connect(MONGO_URI, options)

export { mongoConnection }
