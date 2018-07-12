var express = require('express');
const createError = require('http-errors');
const asyncHandler = require('express-async-handler');
const shortid = require('shortid');

var router = express.Router();

const repository = require('../util/repository');

router.use((req, res, next) => {
  if (req.headers['x-apikey'] !== process.env.API_KEY) {
    next(createError(403));
  } else {
    next();
  }
});

/* POST custom URL shortening */
router.post('/custom/:url/:hash', asyncHandler( async function(req, res, next) {
  let result = await repository.addNewUrl(req.params.url, req.params.hash);
  res.send('https://uehl.in/' + req.params.hash);
}));

/* POST random URL shortening */
router.post('/random/:url', asyncHandler( async function(req, res, next) {
  let id = shortid.generate();
  let result = await repository.addNewUrl(req.params.url, id);
  res.send('https://uehl.in/' + id);
}));

/* DELETE shortened URL  */
router.delete('/:hash', asyncHandler( async function(req, res, next) {
  let result = await repository.removeUrl(req.params.hash);
  res.send('respond with a resource');
}));

module.exports = router;
