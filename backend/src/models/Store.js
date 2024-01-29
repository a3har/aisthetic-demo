import mongoose from "mongoose"

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  country: { type: String, required: true },
})

const phoneSchema = new mongoose.Schema({
  number: { type: String, required: true },
  countryCode: { type: String, required: true },
})

const storeTimingsSchema = new mongoose.Schema({
  day: { type: Number, required: true },
  startHour: { type: Number, required: true },
  startMinute: { type: Number, required: true },
  endHour: { type: Number, required: true },
  endMinute: { type: Number, required: true },
  isClosed: { type: Boolean, required: true },
})

const storeSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  address: { type: addressSchema, required: true },
  phone: { type: phoneSchema, required: true },
  email: { type: String, required: true },
  image: { type: String },
  timings: { type: [storeTimingsSchema], required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const Store = mongoose.model("Store", storeSchema)

export default class StoreMapper {
  constructor() {}

  async find(query, sort = {}, offset = 0, limit = 10) {
    return await Store.find(query)
      .sort(sort || { createdAt: -1 })
      .limit(limit)
      .skip(offset)
  }

  async createOrUpdate(data) {
    const store = await Store.findOneAndUpdate({ slug: data.slug }, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    }).lean()
    return store
  }

  async findById(id) {
    return await Store.findById(id)
  }
}
