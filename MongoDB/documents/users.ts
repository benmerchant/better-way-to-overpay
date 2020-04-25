module.exports = [
  {
    first_name: 'Ben',
    last_name: 'Merchant',
    street: '308 Negra Arroyo Lane',
    city: 'Albuquerque',
    state: 'NM',
    zip: '87101',
    phone: '3045585472',
    email: 'benjaminmerchant@gmail.com',
    password: 'livinLaVidaLoca',
    date_of_birth: new Date('September 9, 1999'),
    paymentInstruments: {
      type: 'CreditCard', // TODO: make own entity with id
      nickname: 'Chase Sapphire'
    }
  }
]