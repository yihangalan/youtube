import express from 'express';
import {signup} from "../controllers/auth.js";

const router = express.Router();

//Create a new user
router.post("/signup", signup)

//sign in
router.post("/signin", )

//google auth
router.post("/google", )


export default router;
