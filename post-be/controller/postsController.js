import { PostModel } from "../model/PostModel.js"

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: err })
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save()
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: err })
    }
}


export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body;
        const post = await PostModel.findByIdAndUpdate({ _id: updatePost._id }, updatePost, { new: true })
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: err })
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await PostModel.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(200).json({ id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


