export async function up(knex) {
  return knex.schema.createTable("messages", (table) => {
    table.increments("id").primary();
    table.string("from").notNullable();
    table.string("to").notNullable();
    table.text("message").notNullable();
    table.timestamp("timestamp").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable("messages");
}
