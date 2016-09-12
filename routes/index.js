var express = require('express');
var router = express.Router();
var api = require('../api/meetup');
var train = require('../api/rtd');

/* GET home page. */
router.get('/', function(req, res, next) {
  api.getMeetup().then(data => {
    res.send(data);
  })
});

router.get('/trains', (req, res, next) => {
  res.send(train);
})

module.exports = router;
