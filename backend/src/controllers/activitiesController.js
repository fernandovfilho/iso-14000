const connection = require('../database/connection');
const Activity = require('../models/Activity');

module.exports = {
    async index(request, response) {
        const [count] = await connection('activities').count();

        const activities = await connection('activities').select();

        response.header('X-Total-Count', count['count(*)']);
        return response.json(activities);
    },

    async store(request, response) {
        try {
            let activity = Activity(request.body);

            const [id] = await connection('activities').insert(activity);

            response.json({ id });
        } catch (error) {
            console.log('error', error);
            response.status(500).send();
        }
    },
};
