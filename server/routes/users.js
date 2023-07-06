import express from 'express';
import {deleteUser, getUser, like, dislike, subscribe, unSubscribe, update} from "../controllers/user.js";
import {verifyToken} from "../verifyToken.js";

const router = express.Router();

//update user
router.put('/:id', verifyToken, update);

//delete user
router.delete('/:id', verifyToken, deleteUser);

//get a user
router.get('/find/:id', getUser);

//subscribe to a user
router.put('/sub/:id', verifyToken, subscribe);

//unsubscribe from a user
router.put('/unsub/:id', verifyToken, unSubscribe);

//like a video
router.put('/like/:videoId', verifyToken, like);

//dislike a video
router.put('/dislike/:videoId', verifyToken, dislike);

export default router;
