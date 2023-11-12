import express from "express";
import { signup } from "../controller/auth.cotroller.js";

const router = express.Router();

router.post('/signup',signup)

export default router;