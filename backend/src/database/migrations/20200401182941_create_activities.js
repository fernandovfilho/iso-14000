exports.up = function (knex) {
    return knex.schema.createTable('activities', function (table) {
        table.string('id').primary();
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.string('environment').notNullable();
        table.string('contaminationType').notNullable();
        table.string('level').notNullable();
        table.float('value', 2).notNullable();
        table.string('unit').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('activities');
};
