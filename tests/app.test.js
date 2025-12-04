// tests/app.test.js
const request = require('supertest');
const app = require('../app');

// Keep reference to server
let server;

beforeAll(() => {
  server = app.listen(); // Or your app.listen call
});

afterAll((done) => {
  server.close(done);
});

describe('Node CI/CD app', () => {
  it('GET / should return message and version', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body).toHaveProperty('version');
  });

  it('GET /health should return ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
