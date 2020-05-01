import express from 'express'

import home from './home'
import automobiles from './automobiles'
import contracts from './contracts'
import creditCardSystems from './creditCardSystems'
import users from './users'

const app = express()
const router = express.Router()

router.use('/', home)
router.use('/automobiles', automobiles)
router.use('/contracts', contracts)
router.use('/creditCardSystems', creditCardSystems)
router.use('/users', users)

export default router