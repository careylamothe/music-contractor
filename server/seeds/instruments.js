
exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE instruments_id_seq restsart with 4').then(function() {
    return knex('instruments').del()
  })
  // Deletes ALL existing entries
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('instruments').insert({
          id: 1,
          name: 'trumpet'
        }),

        knex('instruments').insert({
          id: 2,
          name: 'cello',
        }),

        knex('instruments').insert({
          id: 3,
          colName: 'French horn'})
      ]);
    });
};
