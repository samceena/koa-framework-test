const Router = require('koa-router'),
  router = new Router(),
  rhinocerosRoutes = require('./rhinoceros.js');

router.use(rhinocerosRoutes.routes());

module.exports = router;