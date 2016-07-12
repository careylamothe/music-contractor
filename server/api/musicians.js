var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function Musicians() {
  return knex('musicians');
}

function Events() {
  return knex('events');
}

function Musician_event() {
  return knex('musician_event');
}

router.get('/', function(req, res) {
  Musicians().then(function (musicians) {
    res.json(musicians)
  }).catch(function(error) {
    res.status(500)
    res.json(error)
  })
});

router.get('/:id', function(req, res) {
  Musicians().where('id', req.params.id ).first().then(function(musician) {
    res.json(musician)
  }).catch(function(error) {
    res.status(500)
    res.json(error)
  })
});

router.post('/', function(req, res) {
  Musicians().insert({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    bio: req.body.bio,
    imageURL: req.body.imageURL,
    instrument: req.body.instrument
  }, 'id').then(function (ids) {
      res.json({ id: ids[0]});
  });
});

//get event data related to musician.id
router.get('/:id/events', function(req, res) {
  Musician_event().where('event_id', req.params.id)
  .join('musicians', 'musicians.id', 'musicians_id')
  .then(function(events) {
    res.json(events)
  }).catch(function(error) {
    res.status(500)
    res.json(error)
  })
});

router.put('/:id/update', function(req, res) {
  Musicians().where('id', req.params.user_id).update({
    full_name: req.body.full_name,
    email: req.body.email,
    bio: req.body.bio,
    imageURL: req.body.imageURL
  }).then(function(updated) {
    res.json(musicians)
  })
});

router.delete('/:id/delete', function(req, res) {
  Musicians().where('id', req.params.user_id).first().del().then(function() {
    res.json(musicians)
  })
});


module.exports = router;
