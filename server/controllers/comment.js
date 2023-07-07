import Comment from '../models/Comment.js';
import Video from '../models/Video.js';
import {createError} from "../error.js";
export const addComment = async (req, res, next) => {
    const newComment = new Comment({...req.body, userID: req.user.id});
    try{
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    }catch (err){
        next(err);
    }
}

export const deleteComment = async (req, res, next) => {
    try{
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(comment.videoID);
        if(comment.userID === req.user.id || video.userID === req.user.id){
            await Comment.findByIdAndDelete(
                req.params.id,
            );
            res.status(200).json('Comment deleted');
        }else {
            next(createError(403, 'You can only delete your own comments'));
        }

    }catch (err){
        next(err);
    }
}

export const getComments = async (req, res, next) => {
    try{
        const comments = await Comment.find({videoID: req.params.videoId});
        res.status(200).json(comments);
    }catch (err){
        next(err);
    }
}

