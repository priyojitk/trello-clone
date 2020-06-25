import express from "express";
import * as boardContoller from "../controllers/boardController";
const router = express.Router();

router.post("/create", boardContoller.create);
router.get("/find", boardContoller.find);
export default router;
