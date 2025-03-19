export async function up(knex) {
  return knex.schema.alterTable("assignments", (table) => {
    table.integer("completedSets").defaultTo(0); // add the column with default 0
  });
}

export async function down(knex) {
  return knex.schema.alterTable("assignments", (table) => {
    table.dropColumn("completedSets");
  });
}
