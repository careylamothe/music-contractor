var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

require('dotenv').load();

var mailgun = require('mailgun-js')({
  apiKey: [process.env.MAILGUN_API_KEY],
  domain: [process.env.MAILGUN_DOMAIN]
});


function Events() {
  return knex('events')
}
function Musician_event() {
  return knex('musician_event')
}
function Musicians() {
  return knex('musicians')
}
//get all events
router.get('/', function(req, res) {
  Events().then(function (events) {
    res.json(events)
  }).catch(function (error) {
    res.status(500)
    res.json(error)
  })
});

router.post('/:id/invite', function(req, res) {
  console.log(req.body)
  Musicians().whereIn( 'id', req.body.array ).then(function(musicians) {
    //insert each musician into musicin_event table
    var promises = [];

    for (var i = 0; i < musicians.length; i++) {
      var query = Musician_event().insert({
        event_id: req.params.id,
        musician_id: musicians[i].id,
        invite_status: 0
      });
      promises.push(query)
    }
    Promise.all(promises).then(function() {
      Events().where('id', req.body.array).first().then(function(event) {
        //get email for each musician

        Musicians().select('email').whereIn('id', req.body.array).debug(true).then(function(emails) {
          emails = emails.map(function(email) {
            return email.email;
          })
          var from_who = 'admin@careylamothe.com';
          var data = {
            from: from_who,
            to: emails,
            subject: 'Upcoming gig',
            html: req.body.message
          }

          mailgun.messages().send(data, function(err, body) {
            if (err) {
              console.log('got an error: ', err);
              res.status(500);
              res.json(err);
            } else {
              res.json({ message: 'invite sent' });
              console.log(body)
            }
          })
        })
      })
    })
  })
});

//get event by organizer(id)

router.get('/:id', function(req, res) {
  Events().where({ id: req.params.id }).first().then(function(anEvent) {
    res.json(anEvent)
  }).catch(function (error) {
    res.status(500)
    res.json(error)
  })
 });

router.post('/', function(req, res) {
  Events().insert({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    venue: req.body.venue,
    address: req.body.address,
    notes: req.body.notes
  },'id').then(function (ids) {
    res.json({ id: ids[0] });
  });
});

router.put('/:id/update', function(req, res) {
  Events().where('id', req.params.event_id).update({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time,
    venue: req.body.venue,
    address:req.body.address,
    notes: req.body.notes
  }).then(function(updated) {
  res.json(events)
  })
});

router.delete('/:id/delete', function(req, res) {
  Events().where('id', req.params.user_id).first().del()
  .then(function() {
    res.json(events)
  })
});


module.exports = router;
