import express from "express";
import { getPosts, createPost, updatePost } from "../controller/postsController.js";

const router = express.Router();

router.get("/list", getPosts);


router.post("/create", createPost);

router.put("/update", updatePost);


export default router;