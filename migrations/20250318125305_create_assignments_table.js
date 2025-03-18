export async function up(knex) {
  return knex.schema.createTable("assignments", (table) => {
    table.increments("id").primary();
    table.integer("physiotherapistId").notNullable();
    table.integer("patientId").notNullable();
    table.integer("exerciseId").notNullable();
    table.integer("repetitions").notNullable();
    table.integer("sets").notNullable();
    table.string("difficulty");
    table.text("instructions");
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  return knex.schema.dropTable("assignments");
}
