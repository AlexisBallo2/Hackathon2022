/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema
        .createTable('alltable', table => {
            table.integer("ID").primary();
            table.string("itemOrService").primary();
            table.string("publishTime").primary();
            table.string("endTime").primary();
            table.string("user").primary();
            table.string("buySellRentBorrow").primary();
            table.float("price").primary();
        })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("alltable");
};
