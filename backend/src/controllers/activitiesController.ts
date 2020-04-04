import { Request, Response } from 'express'
import Activity from '../models/Activity'

class ActivityController {
    public async index(
        request: Request,
        response: Response
    ): Promise<Response> {
        let activity = new Activity()

        const { count, activities } = await activity.list()

        response.header('X-Total-Count', count['count(*)'])
        return response.json(activities)
    }

    public async store(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { body } = request

            let activity = new Activity(body)

            const id = await activity.save()

            return response.json({ id })
        } catch (error) {
            return response.status(500).send()
        }
    }

    public async update(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const { body } = request
            const { id } = request.params
            let activity = new Activity(body)
            activity.id = Number(id)
            const res = await activity.update()
            if (res) return response.send()
            return response.status(500).send()
        } catch (error) {
            console.log('error', error)
            return response.status(500).send()
        }
    }
}

export default new ActivityController()
