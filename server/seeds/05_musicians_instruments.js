
exports.seed = function(knex, Promise) {
  return knex('musicians_instruments').del().then(function() {
    return knex.raw('ALTER SEQUENCE musicians_instruments_id_seq restart with 4')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('musicians_instruments').insert({
          id: 1,
          musician_id: 1,
          instrument_id: 1
        }),
        knex('musicians_instruments').insert({
          id: 2,
          musician_id: 2,
          instrument_id: 2        }),
        knex('musicians_instruments').insert({
          id: 3,
          musician_id: 3,
          instrument_id: 3
        })
      ]);
    });
  })
};
