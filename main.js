const prompt = require("prompt-sync")();
const fs = require("fs");
const {
  fetchFromAPI,
  saveToJson,
  sortByRate,
  search,
  searchByRate,
  searchByGenre,
  searchByreleaseYear,
  searchByDirector,
  searchByTitle,
  deleteMovie,
  update,
  updateRate,
  PrintMenu,
  listMovies,
  listFavorites,
  addMovie,
  markFavorite,
  updateTitle,
  updateDirector,
  updateReleaseYear,
  updateGenre,
  movies,
} = require("./utilities.js");

const main = () => {
  fs.readFile("movies.json", "utf-8", (err, data) => {
    if (err) {
      console.log("Something went wrong while loading json file :(");
      console.log(err.message);
    } else {
      const arr = JSON.parse(data);
      movies.push(...arr);

      while (true) {
        PrintMenu();

        let choice = parseInt(prompt("What's your choice? "));
        switch (choice) {
          case 1:
            listMovies();
            break;

          case 2:
            listFavorites();
            break;

          case 3:
            addMovie();
            break;

          case 4:
            markFavorite();
            break;

          case 5:
            deleteMovie();
            break;

          case 6:
            update();
            break;

          case 7:
            search();
            break;

          case 8:
            sortByRate();
            break;

          case 9:
            saveToJson();
            return;

          case 10:
            return;

          default:
            console.log("Your choice must be from 1 to 10, please.");
        }
      }
    }
  });
};

main();
