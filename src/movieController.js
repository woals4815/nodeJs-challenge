/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import routes from "../routes";
import Movie from "./models/Movie";

// Add your magic here!

export const home = async (req, res) => {
  try {
    const movies = await Movie.find();
    if (!movies) {
      res.render("404");
    }
    res.render("home", { movies });
  } catch (error) {
    console.log(error);
  }
};

export const movie = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    if (id !== "favicon.ico") {
      const movie = await Movie.findById(id);
      if (!movie) {
        res.render("404");
      }
      console.log(movie);
      res.render("movie", { movie });
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const getCreateMovie = (req, res) => {
  res.render("create");
};

export const postCreateMovie = async (req, res) => {
  try {
    const {
      body: { title, synopsis, year, rating, genres },
    } = req;
    const genresArr = genres.split(",");
    const newMovie = await Movie.create({
      title,
      synopsis,
      year,
      rating,
      genres: genresArr,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const searchMovie = async (req, res) => {
  try {
    const {
      query: { rating, year },
    } = req;
    if (rating) {
      const movies = await Movie.find({ rating: { $gte: rating } });
      res.render("home", { movies });
    } else if (year) {
      const movies = await Movie.find({ year: { $gte: year } });
      res.render("home", { movies });
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const getEditMovie = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    if (id !== "favicon.ico") {
      const movie = await Movie.findById(id);
      if (!movie) {
        res.render("404");
      }
      res.render("editMovie", { movie });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.detail);
  }
};
export const postEditMovie = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres },
  } = req;
  const genresArr = genres.split(",");
  try {
    if (id !== "favicon.ico") {
      const editedMovie = await Movie.findOneAndUpdate(
        { _id: id },
        { title, year, rating, synopsis, genres: genresArr }
      );
      console.log("done");
    }
    res.redirect(routes.detail);
  } catch (error) {
    console.log(error);
    res.redirect(routes.detail);
  }
};
