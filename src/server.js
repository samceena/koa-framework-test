const Koa = require('koa'),
  app = new Koa(),
  bodyParser = require('koa-bodyparser'),
  // routes = require('./routes/rhinoceros.js');
  routes = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.proxy = true;

app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log('request received', { method: ctx.method, path: ctx.path });
  await next();
});

app.use(routes.routes());

console.log(`Server listening on port: ${PORT}`);
const server = app.listen(PORT);
