const request = require('supertest');
const app = require('../../src/app');

describe('Main Route', () => {
    it('should be able to generate a random ID', async () => {
        const response = await request(app).get('/').send();

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});
