const express = require('express');
const createError = require('http-errors');
const asyncHandler = require('express-async-handler');

var router = express.Router();

const repository = require('../util/repository');

/* GET shortened URL */
router.get('/:hash', asyncHandler( async function(req, res, next) {
  let result = await repository.getUrl(req.params.hash);
  if(result && result.url){
    res.redirect(result.url);
  } else {
    next(createError(404));
  }
}));

module.exports = router;
