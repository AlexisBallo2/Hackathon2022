// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { getFullTable } from "../../lib/backend/tableManager";

const allData = getFullTable();

export default function handler(req, res) {
  res.status(200).json({ data: "here" });
}
