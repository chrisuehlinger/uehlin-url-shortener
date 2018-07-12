var express = require('express');
const asyncHandler = require('express-async-handler');

var router = express.Router();

const repository = require('../util/repository');

/* GET shortened URL */
router.get('/:hash', asyncHandler( async function(req, res, next) {
  let result = await repository.getUrl(req.params.hash);
  res.redirect(result.url);
}));

module.exports = router;
