import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("languages", (table) => {
      table.string("name").primary();
      table.integer("reserved_seats").defaultTo(0).notNullable();
      table.integer("tablesOf6").defaultTo(0).notNullable();
      table.integer("tablesOf8").defaultTo(0).notNullable();
    })
    .createTable("courses", (table) => {
      table.string("name").primary();
      table.string("code").notNullable();
      table.string("language").notNullable();
      table.foreign("language").references("languages.name");
    })
    .createTable("faculty", (table) => {
      table.string("language").notNullable();
      table.foreign("language").references("languages.name");
      table.string("contact_email").notNullable();
      table.boolean("daily_reports").defaultTo(false).notNullable();
      table.boolean("weekly_reports").defaultTo(false).notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("languages").dropTable("courses");
}
