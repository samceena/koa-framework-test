const Router = require('koa-router'),
  router = new Router(),
  rhinocerosController = require('../controllers/');

router.get('/rhinoceros', rhinocerosController.getAll);
router.get('/rhinoceros/endangered', rhinocerosController.getEndangered);
router.get('/rhinoceros/:id', rhinocerosController.getSingle );
router.post('/rhinoceros', rhinocerosController.createRhinoceros);

module.exports = router;