export async function up(knex) {
  return knex.schema.createTable("exercises", (table) => {
    // Use exercise_id as the primary key (if it is unique)
    table.string("exercise_id").primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.string("level").notNullable();
    // For JSON columns, if your MySQL version supports it:
    table.json("body_parts").notNullable();
    table.json("exercise_details").notNullable();
    table.string("category").notNullable();
    table.json("images").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex) {
  return knex.schema.dropTable("exercises");
}
