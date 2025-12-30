import express, { Request, Response } from "express";
import { RateRequestPayload } from "./types";
const router = express.Router();

export default router.post('/', async function (req: Request, res: Response) {
  const payload: RateRequestPayload = req.body;

  const { rate } = payload;
  const { customer } = rate;

  if (!customer?.tags.includes("VIP")) {
    // send empty rates array.
    return res.json([])
  }

  return res.json([
    {
      service_name: "My Rate Provider",
      service_code: "free_shipping_vip",
      description: "Free Shipping for VIP Customers",
      total_price: "0",
      currency: "USD",
    },
  ]);
})
