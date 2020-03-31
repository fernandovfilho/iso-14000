const request = require('supertest');
const app = require('../../src/app');

describe('Activity', () => {
    it('should be able to create a new activity', async () => {
        const response = await request(app).post('/ativities').send({
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
});
