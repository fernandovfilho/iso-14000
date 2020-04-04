import { Router } from 'express'
import ActivityController from './controllers/activitiesController'

const routes = Router()

routes.get('/activities', ActivityController.index)
routes.post('/activities', ActivityController.store)
routes.put('/activities/:id', ActivityController.update)
routes.delete('/activities/:id', ActivityController.destroy)

export default routes
