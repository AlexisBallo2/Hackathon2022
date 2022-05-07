import { NextApiRequest, NextApiResponse } from "next";
import { addItem } from "../../lib/backend/tableManager";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const itemOrService = req.body.itemOrService;
    const publishTime = req.body.publishTime;
    const endTime = req.body.endTime;
    const user = req.body.user;
    const buySellRentBorrow = req.body.buySellRentBorrow;
    const price = req.body.price;
    const image = req.body.image;
    const data = await addItem(
      itemOrService,
      publishTime,
      endTime,
      user,
      buySellRentBorrow,
      image,
      price
    );
    res.status(200).json({ name: "success" });
  } else {
  }
}
