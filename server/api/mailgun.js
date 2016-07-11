var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

require('dotenv').load();

function Events() {
  return knex('events')
}

function Musicians() {
  return knex('musicians')
}

var mailgun = require('mailgun-js')({
  apiKey: [process.env.MAILGUN_API_KEY],
  domain: [process.env.MAILGUN_DOMAIN]
});

var from_who = 'carey.lamothe@gmail.com';


router.get('  /:email', function(req, res) {
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$')

  var data = {
    from: from_who,
    to: 'carey.lamothe@gmail.com',
    subject: 'Does this work or what?',
    html: 'This is your new freind! <a href="http://localhost:9000/validate?' + 'carey.lamothe@gmail.com' + '">Click here to add your email address to respond</a>'
  }

  mailgun.messages().send(data, function (err, body) {
    if (err) {
      console.log("got an error: ", err);
    } else {
      res.json( { mail: req.params.mail });
      console.log(body);
    }

  });
});

router.get('/')

// router.get('/validate:mail', function(req, res) {
//   var members = [
//     {
//       address: req.params.mail
//     }
//   ];
// })



module.exports = router;
