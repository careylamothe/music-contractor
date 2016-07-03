
exports.up = function(knex, Promise) {
  return knex.schema.createTable('musicians', function(table) {
    table.increments();
    table.text('full_name');
    table.integer('user_id');
    table.text('email');
    table.text('bio');
    table.varchar('phone', 12);
    table.text('imageURL');
    table.text('primary_inst_id');
    table.integer('state');
    table.boolean('principal').defaultTo(false);
    table.boolean('soloist').defaultTo(false);
    table.boolean('jazz').defaultTo(false);
    table.boolean('classical').defaultTo(false);
    table.text('adminNote');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('musicians');
};
