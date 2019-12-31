const Router = require('koa-router');
const api = new Router({ prefix: '/api' });
// const authController = require( './koa/controllers/auth-controller' );


api.get('/', async context => {
  context.body = 'api';
});
api.get('/ping', async context => {
  console.log('ping')
  context.body = 'pong';
});


// api.get('/auth/register', authController.register);
// api.get('/auth/login', authController.login);

module.exports = api;