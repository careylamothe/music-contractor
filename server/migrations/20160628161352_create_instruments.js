
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instruments', function(table) {
    table.increments();
    table.text('name');
    table.integer('type_id').unsigned().references('id').inTable('instrument_types').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instruments');
};
