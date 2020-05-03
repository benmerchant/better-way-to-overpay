import express from 'express'

import Home from './components/home/routes'
import Automobiles from './components/automobiles/automobiles.routes'
import Contracts from './components/contracts/contracts.routes'
import CreditCardSystems from './components/creditCardSystems/creditCardSystems.routes'
import Users from './components/users/users.routes'

const router = express.Router()

router.use('/', Home)
router.use('/automobiles', Automobiles)
router.use('/contracts', Contracts)
router.use('/creditCardSystems', CreditCardSystems)
router.use('/users', Users)

export default router
