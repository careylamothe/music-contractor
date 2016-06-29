
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instrument_types', function(table) {
    table.increments();
    table.string('family');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instrument_types');
};
