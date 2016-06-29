
exports.up = function(knex, Promise) {
  return knex.schema.createTable('organizers', function(table) {
    table.increments();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('organizers')
};
