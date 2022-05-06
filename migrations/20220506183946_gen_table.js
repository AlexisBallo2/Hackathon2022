/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("alltable", (table) => {
    table.integer("ID").primary().useNullAsDefault;
    table.string("itemOrService").primary().useNullAsDefault;
    table.string("publishTime").primary().useNullAsDefault;
    table.string("endTime").primary().useNullAsDefault;
    table.string("user").primary().useNullAsDefault;
    table.string("buySellRentBorrow").primary().useNullAsDefault;
    table.float("price").primary().useNullAsDefault;
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("alltable");
};
