/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("alltable").del();
  await knex("alltable").insert([
    { ID: 1, itemOrService: "rowValue1" },
    { ID: 2, itemOrService: "row1" },
  ]);
};
