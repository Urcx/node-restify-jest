/**
 * TESTE DE INTEGRAÇÃO API
 */

const server = require('../server');
const supertest = require('supertest');

describe('Teste do server Restify',  () => {
    it('Consultando os dados de usuário', async () => {
        let response = await supertest(server).get('/users');

        expect(response.statusCode).toEqual(200);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('jobs');
    })
    it('Consultando de pagina não encontrada', async () => {
        let response = await supertest(server).get('/');

        expect(response.statusCode).toEqual(404);
        expect(response.body).toHaveProperty('statusCode');
        expect(response.body).toHaveProperty('errorName');
        expect(response.body).toHaveProperty('message');
    })
})
