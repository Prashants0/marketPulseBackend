import express from "express";
import prisma from "../lib/prisma.js";

export const userRouter = express.Router();

userRouter.get("/holdings", async (req, res) => {
  const userId = req.query.userId;
  const { holdings } = await prisma.users_broker_profile.findFirst({
    where: {
      user_id: userId,
    },
  });
  holdings.map((holding) => {
    holding.symbol = holding.symbol.slice(
      holding.symbol.indexOf(":") + 1,
      holding.symbol.indexOf("-")
    );
  });
  res.send(holdings);
});

userRouter.get("/transactions", (req, res) => {
  const userId = req.query.userId;
  const transactions = prisma.users_;

  res.send("Hello, World!");
});
