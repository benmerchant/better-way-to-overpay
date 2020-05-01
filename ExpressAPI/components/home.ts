import express from 'express'

const router = express.Router()

router.get('/', (_req: any, res: any) => {
  res.send('Heyooooo, World!')
})

export default router