export async function up(knex) {
  return knex.schema.createTable("progress_logs", (table) => {
    table.increments("id").primary();
    table.string("patientId").notNullable();
    table.date("logDate").notNullable();
    table.text("performanceData").notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable("progress_logs");
}
