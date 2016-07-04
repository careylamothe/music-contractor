
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('ALTER SEQUENCE musicians_events_id_seq restart with 4').then(function() {
    return knex('musicians_events').del();

  }).then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('musicians_events').insert({
          musician_id: 1,
          event_id: 1
        }),

        knex('musicians_events').insert({
          musician_id: 2,
          event_id: 2
        }),

        knex('musicians_events').insert({
          musician_id: 3,
          event_id: 3
        })
      ]);
    });
};
