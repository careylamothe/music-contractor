
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.increments();
    table.text('title');
    table.text('description');
    table.text('venue');
    table.text('address');
    table.dateTime('date_time');
    table.integer('minutes');
    table.integer('num_services');
    table.integer('budget');
    table.integer('organizer_id').unsigned().references('id').inTable('organizers').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};
