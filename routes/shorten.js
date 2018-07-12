var express = require('express');
var router = express.Router();

const repository = require('../util/repository');

/* POST vanity URL shortening */
router.post('/:url/:hash', function(req, res, next) {
  repository.addNewUrl(req.params.url, req.params.hash);
  res.send('respond with a resource');
});

module.exports = router;
