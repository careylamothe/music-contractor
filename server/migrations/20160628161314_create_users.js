
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.text('full_name');
    table.text('email');
    table.varchar('phone', 12)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
