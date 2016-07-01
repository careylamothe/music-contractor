var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Events() {
  return knex('authors')
}

router.get('/', function(req, res) {
  Events().select().then(function () {
    res.json([])
  })
})

router.get('/:id', function(req, res) {
  Events().where('user_id', req.user._id)
});

router.post('/', function(req, res) {
  Events()
  .insert({ title: req.body.title , date: req.body.date, time: req.body.time, }, 'id')
  .then(function (ids) {
    res.json({ id: ids[0] });
  });
});

module.exports = router;
