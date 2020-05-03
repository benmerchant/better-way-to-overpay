import mongoose from 'mongoose'

const { Schema } = mongoose

const ContractSchema = new Schema({
  dateCreated: {
    type: Date,
    required: true,
  },
  originalBalance: {
    type: Number,
    required: true,
  },
  paymentFrequency: { // TODO: make own entity,
    type: String,
    required: true,
  },
  normalPaymentAmount: {
    type: Number,
    required: true,
  },
  automobiles: {
    type: String, // TODO: MongoObjectId
    required: true,
  },
  user: {
    type: String, // TODO: MongoObjectId
    required: true,
  },
  payments: [
    {
      dateOfPayment: {
        type: Date,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      paymentInstrument: { // TODO: MongoObjectId
        type: String,
        required: true,
      },
    },
  ],
})

export default mongoose.model('Contract', ContractSchema)
