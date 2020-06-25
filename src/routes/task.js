import express from "express";
import * as taskController from "../controllers/taskController";
const router = express.Router();

router.post("/create", taskController.create);

export default router;
