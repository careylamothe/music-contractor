
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.increments();
    table.integer('organizer_id').unsigned().references('id').inTable('organizers').onDelete('cascade');
    table.text('title');
    table.text('description');
    table.text('venue');
    table.text('address');
    table.text('date');
    table.text('time');
    table.text('notes');
    table.integer('minutes');
    table.integer('num_services');
    table.integer('payment');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
