import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./connectDB.js";
import router from "../api/routes/movie.js";
dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(cookieParser());

connectDB();

server.get("/", (req, res) => {
  res.json({ message: "welcome filmyzilla" });
});
server.use("/api", router);

export default server;
