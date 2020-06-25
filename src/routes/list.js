import express from "express";
import * as listContoller from "../controllers/listController";

const router = express.Router();

router.post("/create", listContoller.create);

export default router;
