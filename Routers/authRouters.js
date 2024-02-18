import { Router } from "express";
const router = Router()
import { register, login, logout } from "../Controllers/authController.js";

router.post('/register', register)
router.post('/login', login)

export default router