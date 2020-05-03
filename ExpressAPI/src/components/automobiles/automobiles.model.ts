import mongoose from 'mongoose'

const { Schema } = mongoose

const AutomobileSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  VIN: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Automobile', AutomobileSchema)
