// tests/app.test.js
const request = require('supertest');
const app = require('../app');

let server;

beforeAll(async () => {
  server = app.listen(); // Start the server
});

afterAll((done) => {
  server.close(done); // Close server after all tests
  done(); // Explicitly ensure Jest exits
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
