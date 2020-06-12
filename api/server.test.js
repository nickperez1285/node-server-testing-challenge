const server = require('../api/server');
const request = require('supertest');

describe('server', () => {
	    describe('GET /users', () => {
        it('should return 200 status upon successful user addition', () => {
            return request(server)
                .get('/users')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

	}),
	
	    describe('delete /:id', () => {
        it('should return 200 status up successful user deletion ', () => {
            return request(server)
                .delete('/:id')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

	}),


        it('should return all data in JSON', () => {
            return request(server)
                .get('/users')
                .then(res => {
                    expect(res.type).toMatch(/json/)
                    expect(res.type).toBe('application/json');
                })
        })

})