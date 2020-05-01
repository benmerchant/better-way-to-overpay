import express from 'express'

const router = express.Router()

router.get('/', (req: any, res: any) => {
  res.send('uuuSSSeeeRRRsss...uuuSSSeeeRRRsss...uuuSSSeeeRRRsss')
})

export default router