import express from "express";
import * as boardContoller from "../controllers/boardController";
const router = express.Router();
console.log(boardContoller);

router.post("/create", boardContoller.create);

export default router;
