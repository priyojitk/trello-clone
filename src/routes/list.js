import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {
  res.send("List Created");
});

export default router;
