import Contract from './contracts.model'

const ContractController = {
  // GET all contracts
  getContracts: (req: any, res: any) => {
    Contract.find({}).exec((err, contracts) => {
      if (err) res.status(500).json({ error: err })
      return res.status(200).json({ contracts })
    })
  },
}


export default ContractController
