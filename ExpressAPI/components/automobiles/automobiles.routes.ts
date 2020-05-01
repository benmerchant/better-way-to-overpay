import express from 'express'

import AutomobileController from './automobiles.controller'

const AutomobileRouter = express.Router()

AutomobileRouter.get('/', AutomobileController.getAutomobiles)

export default AutomobileRouter