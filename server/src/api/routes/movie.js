import express from "express";
import { MovieHandler } from "../controllers/movie.js";

const router = express.Router();

router.route("/movies").get(MovieHandler.getMovies);

export default router;
