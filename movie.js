class Movie {
  id;
  title;
  director;
  releaseYear;
  genre;
  rate;
  isFavorite = false;

  setFavorite() {
    this.isFavorite = true;
  }
}

Movie.prototype.title = "";
Movie.prototype.director = "";
Movie.prototype.genre = "";

module.exports = { Movie };
