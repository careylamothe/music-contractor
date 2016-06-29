
exports.up = function(knex, Promise) {
  return knex.schema.createTable('musicians_instruments', function(table) {
    table.increments();
    table.integer('instrument_id').unsigned().references('id').inTable('instruments').onDelete('cascade');
    table.integer('musician_id').unsigned().references('id').inTable('musicians').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('musicians_instruments');
};
