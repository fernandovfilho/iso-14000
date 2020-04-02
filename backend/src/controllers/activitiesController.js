const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const [count] = await connection('activities').count();

        const activities = await connection('activities').select();

        response.header('X-Total-Count', count['count(*)']);
        return response.json(activities);
    },
};
