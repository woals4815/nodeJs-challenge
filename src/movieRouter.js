import express from "express";
import {
  getCreateMovie,
  home,
  movie,
  postCreateMovie,
  searchMovie,
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get("/", home);

movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);

movieRouter.get("/search", searchMovie);

movieRouter.get("/:id", movie);

export default movieRouter;
