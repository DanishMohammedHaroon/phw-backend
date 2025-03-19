export async function up(knex) {
  return knex.schema.alterTable("users", (table) => {
    // Add physiotherapistId column. For clients this will be set, for physiotherapists it can remain null.
    table.integer("physiotherapistId").nullable();
  });
}

export async function down(knex) {
  return knex.schema.alterTable("users", (table) => {
    table.dropColumn("physiotherapistId");
  });
}
