import Automobile from './automobiles.model'

const AutomobileController = {
  // GET all automobiles
  getAutomobiles: (req: any, res: any) => {
    Automobile.find({}).exec((err, automobiles) => {
      if (err) res.status(500).json({ error: err })
      return res.status(200).json({ automobiles })
    })
  },
}


export default AutomobileController
