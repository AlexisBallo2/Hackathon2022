// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { getFullTable } from "../../lib/backend/tableManager";

export default async function handler(req, res) {
  const allData = await getFullTable();
  res.status(200).json({ data: allData });
}
