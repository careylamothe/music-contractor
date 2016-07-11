
exports.up = function(knex, Promise) {
  return knex.schema.createTable('musician_event', function(table) {
    table.increments();
    table.integer('musician_id').unsigned().references('id').inTable('musicians').onDelete('cascade');
    table.integer('event_id').unsigned().references('id').inTable('events').onDelete('cascade');
    table.integer('invite_status').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('musician_event');
};
