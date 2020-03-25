/**
 * Método Up = É o que eu quero que seja feito
 */
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {  
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

/**
 * Método Down = É o que eu quero que seja DESfeito
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
