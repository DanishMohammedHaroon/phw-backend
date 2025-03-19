export async function up(knex) {
  return knex.schema.alterTable("feedbacks", (table) => {
    table.integer("physiotherapistId").nullable();
  });
}

export async function down(knex) {
  return knex.schema.alterTable("feedbacks", (table) => {
    table.dropColumn("physiotherapistId");
  });
}
