import express from "express";
import { saveBill, getBills } from "../controllers/billController.js";

const router = express.Router();

router.post("/add", saveBill);
router.get("/", getBills);

export default router;
