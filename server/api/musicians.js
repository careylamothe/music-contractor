var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

function Musicians() {
  return knex('musicians');
}

router.get('/', function(req, res) {
  res.json([]);

  //req.user._id
})

router.get('/musicians', function(req, res) {
  req.user._id;
  res.redirect('/musicians/:id')
});

router.get('/musicians/:id', function(req, res) {
  return Musicians().where('user_id', req.user_id);
});

router.post('/musicians', function(req, res) {
  Musicians().insert({ name: req.body.full_name }).then(function () {
    res.redirect('/musicians:id');
  });
});

module.exports = router;
