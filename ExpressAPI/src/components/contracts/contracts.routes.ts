import express from 'express'

import ContractController from './contracts.controller'

const ContractRouter = express.Router()

ContractRouter.get('/', ContractController.getContracts)

export default ContractRouter
