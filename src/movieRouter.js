import express from "express";
import routes from "../routes";
import {
  deleteMovie,
  getCreateMovie,
  getEditMovie,
  home,
  movie,
  postCreateMovie,
  postEditMovie,
  searchMovie,
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get(routes.home, home);

movieRouter.get(routes.create, getCreateMovie);
movieRouter.post(routes.create, postCreateMovie);

movieRouter.get(routes.search, searchMovie);

movieRouter.get(routes.detail, movie);

movieRouter.get(routes.edit(), getEditMovie);
movieRouter.post(routes.edit(), postEditMovie);

movieRouter.get(routes.delete(), deleteMovie);
export default movieRouter;
