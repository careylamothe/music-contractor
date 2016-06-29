
exports.up = function(knex, Promise) {
  return knex.schema.createTable('musicians', function(table) {
    table.increments();
    table.text('bio');
    table.text('imageURL');
    table.boolean('principal').defaultTo(false);
    table.boolean('soloist').defaultTo(false);
    table.boolean('jazz').defaultTo(false);
    table.boolean('classical').defaultTo(false);
    table.text('adminNote');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
    table.integer('primary_instrument_id').unsigned().references('id').inTable('instruments').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('musicians');
};
