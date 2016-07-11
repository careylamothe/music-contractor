
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('musician_event').del().then(function() {
    return knex.raw('ALTER SEQUENCE musician_event_id_seq restart with 4')
  .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('musician_event').insert({
          id: 1,
          musician_id: 1,
          event_id: 1,
          invite_status: 0
        }),
        knex('musician_event').insert({
          id: 2,
          event_id: 2,
          musician_id: 2,
          invite_status: 0
        }),
        knex('musician_event').insert({
          id: 3,
          event_id: 3,
          musician_id: 3,
          invite_status: 0
        })
      ]);
    });
  })
};
