import CreditCardSystem from './creditCardSystems.model'

const CreditCardSystemController = {
  // GET all creditCardSystems
  getCreditCardSystems: (req:any, res:any, next:any) => {
    CreditCardSystem.find({}).exec((err, creditCardSystems) => {
      if (err) res.status(500).json({ error: err })
      return res.status(200).json({ creditCardSystems: creditCardSystems })
    })
  }
}


export default CreditCardSystemController