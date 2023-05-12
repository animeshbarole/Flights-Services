const express = require('express');

const v1Routes = require('./v1');

const router = express.Router();

console.log("Inside APi Routes")

router.use('/v1', v1Routes);

module.exports = router;