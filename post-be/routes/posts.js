import express from "express";
import { getPosts, createPost, updatePost, deletePost } from "../controller/postsController.js";

const router = express.Router();

router.get("/list", getPosts);


router.post("/create", createPost);

router.put("/update", updatePost);

router.delete('/delete/:id', deletePost);


export default router;