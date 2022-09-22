const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEvents);
router.post('/', controller.createEvent);

module.exports = router;
