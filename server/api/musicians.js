var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

function Musicians() {
  return knex('musicians');
}

router.get('/', function(req, res) {
  res.json([]);
})

router.get('/:id', function(req, res) {
  Musicians().where('user_id', req.user_id);
});

router.post('/', function(req, res) {
  Musicians().insert({ name: req.body.full_name, email: req.body.email, main: req.body.main_instrument, other: req.body.adminNote, bio: req.body.bio, image: req.body.imageURL }, 'id').then(function (ids) {
    res.json({ id: ids[0]});
  });
});

module.exports = router;
