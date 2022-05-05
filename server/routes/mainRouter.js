const router = require('express').Router();
const userRouter = require('./userRouter');
const moduleRouter = require('./moduleRouter');
const topicRouter = require('./topicRouter');

router.use('/', userRouter);
router.use('/modules', moduleRouter);
router.use('/modules', topicRouter);

module.exports = router;
