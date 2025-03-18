export async function up(knex) {
  return knex.schema.createTable("feedbacks", (table) => {
    table.increments("id").primary();
    table.integer("assignmentId").notNullable();
    table.integer("patientId").notNullable();
    table.string("status").notNullable();
    table.text("comments");
    table.timestamp("timestamp").defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable("feedbacks");
}
