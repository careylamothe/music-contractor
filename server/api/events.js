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
  Events().where('id', req.params.user_id).first().then(function(event) {
    res.json(events)
  }).catch(function (error) {
    res.status(500)
    res.json(error)
  })
 });
//
// router.post('/', function(req, res) {
//   Events().insert({
//     title: req.body.title,
//     date: req.body.date,
//     time: req.body.time,
//     venue: req.body.venue,
//     address: req.body.address,
//     notes: req.body.notes
//   },'id').then(function (ids) {
//     res.json({ id: ids[0] });
//   });
// });
//
// router.put('/:id/update', function(req, res) {
//   Events().where('id', req.params.user_id).update({
//     title: req.body.title,
//     date: req.body.date,
//     time: req.body.time,
//     venue: req.body.venue,
//     address:req.body.address,
//     notes: req.body.notes
//   }).then(function(updated) {
//   res.json(events)
//   })
// });
//
// router.delete('/:id/delete', function(req, res) {
//   Events().where('id', req.params.user_id).first().del()
//   .then(function() {
//     res.json(musicians)
//   })
// });
//
//
module.exports = router;
