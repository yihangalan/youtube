import express from 'express';
import {signin, signup} from "../controllers/auth.js";

const router = express.Router();

//Create a new user
router.post("/signup", signup)

//sign in
router.post("/signin", signin)

//google auth
router.post("/google", )


export default router;
