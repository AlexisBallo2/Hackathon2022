import knexConfig from "../../../knexfile";
import knexInitializer from "knex";

export const knex = knexInitializer(
  knexConfig[process.env.NODE_ENV || "development"]
);

export async function getItem(idno) {
  const review = await knex("alltable");

  if (!review) {
    return null;
  }
  return review;
}

export async function addItem(ios, pt, et, user, bsrb, p) {
  const review = await knex("alltable").insert({
    ID: Math.random * 1000,
    itemOrService: ios,
    publishTime: pt,
    endTime: et,
    user: user,
    buySellRentBorrow: bsrb,
    price: p,
  });
}
export async function getFullTable() {
  const review = await knex("alltable");
  if (!review) {
    return null;
  }
  return review;
}
