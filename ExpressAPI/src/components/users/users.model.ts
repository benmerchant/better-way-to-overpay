import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: String,
    required: Date
  },
  paymentInstruments: [{
    type: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    }
  }]
})

export default mongoose.model('User', UserSchema)