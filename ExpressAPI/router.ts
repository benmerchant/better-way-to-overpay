import express from 'express'

import home from './components/home/routes'
import automobiles from './components/automobiles/routes'
import contracts from './components/contracts/routes'
import creditCardSystems from './components/creditCardSystems/routes'
import users from './components/users/users.routes'

const router = express.Router()

router.use('/', home)
router.use('/automobiles', automobiles)
router.use('/contracts', contracts)
router.use('/creditCardSystems', creditCardSystems)
router.use('/users', users)

export default router