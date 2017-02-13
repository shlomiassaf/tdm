const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router);
server.listen(2525, function () {
  console.log('JSON Server is running');
})

module.exports = {
  "/api": {
    target: 'http://localhost:2525'
  }
};
