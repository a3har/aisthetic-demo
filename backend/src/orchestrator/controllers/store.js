import Joi from "joi"

import { StoreMapper } from "../../models/index.js"

const Store = new StoreMapper()

export const ListStoresController = async (req, res) => {
  // TODO: Add pagination
  // TODO: Add filters
  // TODO: Add sorting

  const stores = await Store.find({})
  return res.status(200).send({ stores })
}

export const GetStoreDetailsController = async (req, res) => {
  const storeId = req.params.storeId
  const store = await Store.findById(storeId)

  if (!store) {
    return res.status(404).send({
      errors: [
        {
          message: "Store not found",
        },
      ],
    })
  }

  return res.status(200).send({ store })
}
