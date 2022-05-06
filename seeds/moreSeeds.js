/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("alltable").del();
  await knex("alltable").insert([
    {
      ID: 1,
      itemOrService: "Joe",
      publishTime: "10/20",
      endTime: "10/22",
      user: "your mom",
      buySellRentBorrow: "no",
      price: 100,
    },
    {
      ID: 2,
      itemOrService: "ALexis",
      publishTime: "10/20",
      endTime: "10/22",
      user: "your mom",
      buySellRentBorrow: "no",
      price: 100,
    },
    {
      ID: 3,
      itemOrService: "Liam",
      publishTime: "10/20",
      endTime: "10/22",
      user: "your mom",
      buySellRentBorrow: "no",
      price: 100,
    },
  ]);
};
