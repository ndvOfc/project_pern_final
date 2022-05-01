const router = require('express').Router();
const userRouter = require('./userRouter');
const moduleRouter = require('./moduleRouter');

router.use('/', userRouter);
router.use('/modules', moduleRouter);

module.exports = router;
