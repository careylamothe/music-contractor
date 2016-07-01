var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Events() {
  return knex('events')
}

router.get('/', function(req, res) {
  Events().then(function (events) {
    res.json(events)
  }).catch(function (error) {
    res.status(500)
    res.json(error)
  })
});

router.get('/:id', function(req, res) {
  Events().where('id', req.params.id).first().then(function(event) {
    res.json(event)
  }).catch(function (error) {
    res.status(500)
    res.json(error)
  })
 });
//
// router.post('/', function(req, res) {
//   Events()
//   .insert(
//     { title: req.body.title,
//       date: req.body.date,
//       time: req.body.time,
//       venue: req.body.venue,
//       address: req.body.date,
//       rehearsals: req.body.rehearsals },
//        'id').then(function (ids) {
//     res.json({ id: ids[0] });
//   });
// });

module.exports = router;
