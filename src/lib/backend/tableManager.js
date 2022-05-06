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

export async function getFullTable() {
  const review = await knex("alltable");
  if (!review) {
    return null;
  }
  return review;
}

export async function addItem(
  idno_,
  item_,
  time_,
  endtime_,
  user_,
  bsrb_,
  price_
) {
  knex("alltable").insert([
    { ID: idno_ },
    { itemOrService: item_ },
    { publishTime: time_ },
    { endTime: endtime_ },
    { user: user_ },
    { buySellRentBorrow: bsrb_ },
    { price: price_ },
  ]);
}
