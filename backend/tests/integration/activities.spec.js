const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Activity', () => {
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    });

    it('should be able to create a new activity', async () => {
        const response = await request(app).post('/activities').send({
            title: 'Concrete production',
            description:
                'Emissions by production of concrete in the second week of April',
            environment: 'air',
            contaminationType: 'co2',
            level: 'high',
            value: 2.56,
            unit: 'ton',
        });

        expect(response.body).toHaveProperty('id');
    });

    it('should be able to list activities', async () => {
        const response = await request(app).get('/activities').send();

        expect(Array.isArray(response.body)).toBe(true);
    });
});
