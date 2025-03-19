export async function up(knex) {
  return knex.schema.alterTable("feedbacks", (table) => {
    table.integer("assignmentId").nullable().alter();
  });
}

export async function down(knex) {
  return knex.schema.alterTable("feedbacks", (table) => {
    // If you need to revert, you may set it back to not nullable
    table.integer("assignmentId").notNullable().alter();
  });
}
