
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instruments').del().then(function() {
    return knex.raw('ALTER SEQUENCE instruments_id_seq restart with 4')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('instruments').insert({
          id: 1,
          name: 'cello'
        }),

        knex('instruments').insert({
          id: 2,
          name: 'trumpet'
        }),

        knex('instruments').insert({
          id: 3,
          name: 'French horn'
        })
      ]);
    });
  })
};
