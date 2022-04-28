const router = require('express').Router();
const userRouter = require('./userRouter');

router.use('/', userRouter);

module.exports = router;
