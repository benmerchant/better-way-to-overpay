import express from 'express'

import UserController from './users.controller'

const EmployeeRouter = express.Router()

EmployeeRouter.get('/', UserController.getUsers)

export default EmployeeRouter