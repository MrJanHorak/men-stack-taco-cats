import mongoose from "mongoose"

const Schema = mongoose.Schema

tacoSchema = new Schema({
  name: String,
  tasty: Boolean,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Taco = mongoosw.model("Taco", tacoSchema)

export {
  Taco
}