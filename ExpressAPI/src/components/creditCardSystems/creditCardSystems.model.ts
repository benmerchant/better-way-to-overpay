import mongoose from 'mongoose'

const { Schema } = mongoose

const CreditCardSystemSchema = new Schema({
  firstNumber: {
    type: String,
    required: true,
  },
  system: {
    type: String,
    required: true,
  },
})

export default mongoose.model('CreditCardSystem', CreditCardSystemSchema)
