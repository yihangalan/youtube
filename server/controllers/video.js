import Video from "../models/Video.js";
import User from "../models/User.js";
import {createError} from "../error.js";

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({userID: req.user.id, ...req.body});
    try{
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    }catch (error) {
        next(error)
    }
}

export const updateVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return  next(createError(404, 'Video not found'));
        if(video.userId === req.user.id){
            const updatedVideo = await Video.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                {new: true}
            );
            res.status(200).json(updatedVideo);
        }else {
            return next(createError(403, 'You can update only your video'));
        }

    }catch (error) {
        next(error)
    }

}

export const deleteVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return  next(createError(404, 'Video not found'));
        if(video.userId === req.user.id){
            await Video.findByIdAndDelete(
                req.params.id,
            );
            res.status(200).json("the video has been deleted");
        }else {
            return next(createError(403, 'You can delete only your video'));
        }

    }catch (error) {
        next(error)
    }

}

export const getVideo = async (req, res, next) => {
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return  next(createError(404, 'Video not found'));
        res.status(200).json(video);

    }catch (error) {
        next(error)
    }
}

export const addView = async (req, res, next) => {
    try{
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views: 1}
        });
        res.status(200).json("The view has been increased");
    }catch (error) {
        next(error)
    }
}

export const random = async (req, res, next) => {
    try{
        const videos = await Video.aggregate([{$sample: { size: 40 } }]);
        res.status(200).json(videos);
    }catch (error) {
        next(error)
    }
}

export const trend = async (req, res, next) => {
    try{
        const videos = await Video.find().sort({views: -1});
        res.status(200).json(videos);

    }catch (error) {
        next(error)
    }
}

export const sub = async (req, res, next) => {
    try{
        const user = await User.findById(req.user.id);
        const subUsers = await user.subscribedUsers;

        const list = await Promise.all(
            subUsers.map((subUser) => {
                return Video.find({userID: subUser});
            }));

        res.status(200).json(list.flat().sort((a, b) => {
            return b.createdAt - a.createdAt;
        }));

    }catch (error) {
        next(error)
    }
}

export const getByTag = async (req, res, next) => {
    const tags = req.query.tags.split(',');
    try{
        const videos = await Video.find({tags: {$in: tags}}).limit(20);
        res.status(200).json(videos);

    }catch (error) {
        next(error)
    }
}

export const search = async (req, res, next) => {
    const query = req.query.q;
    try{
        const videos = await Video.find({
            title: { $regex: query, $options: 'i'}
        }).limit(40);
        res.status(200).json(videos);
    }catch (error) {
        next(error)
    }
}