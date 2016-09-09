var express = require('express');
var router = express.Router();
var api = require('../api/meetup');

/* GET home page. */
router.get('/', function(req, res, next) {
  api.getMeetup().then(data => {
    res.send(data);
  })
});

module.exports = router;
