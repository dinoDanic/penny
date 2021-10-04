import Router from "express";
import { createUser, loginUser } from "../controllers/users.controllers.js";

const router = Router();

router.post("/new", createUser);
router.post("/login", loginUser);

export default router;
