import express from "express";
import { getPosts } from "../controller/postsController.js";

const router = express.Router();

router.get("/", getPosts)

export default router;