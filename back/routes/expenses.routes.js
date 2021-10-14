import Router from "express";
import { createExpense } from "../controllers/expenses.controllers.js";

const router = Router();

router.post("/new", createExpense);

export default router;
