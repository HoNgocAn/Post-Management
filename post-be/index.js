import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routes/posts.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URL = "mongodb+srv://anhongoc1306:Rj2zgB88Bcmleqf0@cluster0.szdxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded(({ extended: true, limit: "30mb" })))
app.use(cors());

app.use("/posts", posts)

mongoose
    .connect(URL)
    .then(() => {
        console.log("Connect to DB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("err", err);
    })
