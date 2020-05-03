import express from 'express'

import CreditCardSystemsController from './creditCardSystems.controller'

const CreditCardSystemsRouter = express.Router()

CreditCardSystemsRouter.get('/', CreditCardSystemsController.getCreditCardSystems)

export default CreditCardSystemsRouter