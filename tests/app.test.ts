import request from 'supertest';
import app from '../src/app';
test('GET /', async () => {
  await request(app).get('/').expect(200);
});