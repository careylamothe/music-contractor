
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rehearsals', function(table) {
    table.increments();
    table.text('address');
    table.dateTime('date_time');
    table.integer('minutes');
    table.integer('event_id').unsigned().references('id').inTable('events').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rehearsals');
};
