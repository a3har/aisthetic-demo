import { Router } from "express"

import {
  GetStoreDetailsController,
  ListStoresController,
} from "../controllers/store.js"

const router = Router()

router.post("/", ListStoresController)
router.get("/:storeId", GetStoreDetailsController)

export default router
