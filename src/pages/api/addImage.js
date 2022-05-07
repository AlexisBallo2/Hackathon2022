import { NextApiRequest, NextApiResponse } from "next";
import { addItem } from "../../lib/backend/tableManager";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const imageUUID = req.file.public_id;
    res.status(200).json({ name: imageUUID });
  } else {
  }
}
