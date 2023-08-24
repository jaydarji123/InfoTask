import express from "express";
import { register, getprofile, login, logout} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me",isAuthenticated , getprofile);

export default router;

