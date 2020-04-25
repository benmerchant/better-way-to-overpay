export default [
  {
    dateCreated: Date.now(),
    originalBalance: 20000,
    paymentFrequency: 'Monthly', // TODO: make own entity,
    normalPaymentAmount: 499,
    automobiles: 'futureMongoId',
    user: 'futureUserId',
    payments: [
      {
        dateOfPayment: new Date('April 1, 2020'),
        amount: 499,
        paymentInstrument: 'futureId'
      }
    ]
  }  
]