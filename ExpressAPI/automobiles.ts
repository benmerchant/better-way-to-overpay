import express from 'express'

const app = express()
const router = express.Router()

router.get('/', (req: any, res: any) => {
  res.send('CARS...cars...CARS')
})

export default router