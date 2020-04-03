import { Router } from 'express'
import ActivityController from './controllers/activitiesController'

const routes = Router()

routes.get('/activities', ActivityController.index)
routes.post('/activities', ActivityController.store)

export default routes
