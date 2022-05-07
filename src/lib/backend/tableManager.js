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

export async function addItem(ios, pt, et, user, bsrb, image, p) {
  const review = await knex("fullTable").insert({
    ID: Math.random * 1000,
    itemOrService: ios,
    publishTime: pt,
    endTime: et,
    user: user,
    image: image,
    buySellRentBorrow: bsrb,

    price: p,
  });
}
export async function getFullTable() {
  const review = await knex("fullTable");
  if (!review) {
    return null;
  }
  return review;
}
