export async function up(knex) {
  // For MySQL, altering a column may require raw SQL.
  return knex.schema.alterTable("assignments", (table) => {
    // You might need to use raw statements for changing column type in MySQL:
    table.string("exerciseId").alter();
  });
}

export async function down(knex) {
  return knex.schema.alterTable("assignments", (table) => {
    table.integer("exerciseId").alter();
  });
}
