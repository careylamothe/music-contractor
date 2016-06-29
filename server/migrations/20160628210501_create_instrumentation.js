
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instrumentation', function(table) {
    table.increments();
    table.integer('event_id').unsigned().references('id').inTable('events').onDelete('cascade');
    table.integer('conductor');
    table.integer('piano');
    table.integer('harp');
    table.integer('organ');
    table.integer('vocal');
    table.integer('violin');
    table.integer('viola');
    table.integer('cello');
    table.integer('double_bass');
    table.integer('flute');
    table.integer('oboe');
    table.integer('clarinet');
    table.integer('saxophone');
    table.integer('basoon');
    table.integer('trumpet');
    table.integer('horn');
    table.integer('trombone');
    table.integer('tuba');
    table.integer('percussion');
    table.integer('elec_bass');
    table.integer('drums_set');
    table.integer('misc');
    table.text('note')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instrumentation');
};
