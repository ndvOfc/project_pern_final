const router = require('express').Router();
const userRouter = require('./userRouter');
const moduleRouter = require('./moduleRouter');
const topicRouter = require('./topicRouter');
// const authRouter = require('./authRouter');

router.use('/', userRouter);
router.use('/modules', moduleRouter);
router.use('/modules', topicRouter);
// router.use('/auth', authRouter);

module.exports = router;
