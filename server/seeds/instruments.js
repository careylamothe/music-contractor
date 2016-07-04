
exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE instruments_id_seq restart with 4').then(function() {
    return knex('instruments').del()
  })
  // Deletes ALL existing entries
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('instruments').insert({
          name: 'trumpet'
        }),

        knex('instruments').insert({
          name: 'cello'
        }),

        knex('instruments').insert({
          name: 'French horn'})
      ]);
    });
};
