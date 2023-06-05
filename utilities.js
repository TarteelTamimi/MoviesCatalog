const { Movie } = require("./movie");
const prompt = require("prompt-sync")();
const fs = require('fs');

const movies = [];
const PrintMenu = () => {
  console.log(`
    =======================================================================================
    1. List the catalog
    2. List favorites
    3. Add movie
    4. Mark as favorite
    5. Delete movie
    6. Update (title/director/releaseYear/genre/rate)
    7. search by (title/director/releaseYear/genre/rate)
    8. sort by rate
    9. save and exit
    10. exit without save
    *** To fetch movies from API use api.js and (https://api.npoint.io/a12ac8f1570d9af1538e)
    =======================================================================================
    `);
};

const listMovies = () => {
  if (movies.length == 0) {
    console.log("There is no movies :(");
  } else {
    console.log(movies);
  }
};

const listFavorites = () => {
  let favorites = movies.filter((movie) => {
    return movie.isFavorite == true;
  });
  if (favorites.length == 0) {
    console.log("There is no favorites :(");
  } else {
    console.log(favorites);
  }
};

const addMovie = () => {
  let m = new Movie();

  console.log("To add new movie, please enter below information ");
  let id = prompt("movie id: ");
  let title = prompt("movie title: ");
  let diractor = prompt("director: ");
  let releaseYear = parseInt(prompt("releaseYear: "));
  let genre = prompt("genre: ");
  let rate = prompt("rate: ");

  m.id = id;
  m.title = title;
  m.director = diractor;
  m.releaseYear = releaseYear;
  m.genre = genre;
  m.rate = rate;

  movies.push(m);
  console.log("added :)");
};

const markFavorite = () => {
  let favId = prompt(
    "Enter id for the movie you want to add in favorite list: "
  );
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == favId) {
      movies[i].isFavorite = true;
    }
  }
  console.log("added to favorite list :)");
};

const updateTitle = () => {
  let id = prompt("Enter id for the movie you want to update its title: ");
  let title = prompt("Enter new title: ");

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movies[i].title = title;
    }
  }
};

const updateDirector = () => {
  let id = prompt("Enter id for the movie you want to update its director: ");
  let diractor = prompt("Enter the name of new director: ");

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movies[i].diractor = diractor;
    }
  }
};

const updateReleaseYear = () => {
  let id = prompt(
    "Enter id for the movie you want to update its release year: "
  );
  let releaseYear = prompt("Enter new year: ");

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movies[i].releaseYear = releaseYear;
    }
  }
};

const updateGenre = () => {
  let id = prompt("Enter id for the movie you want to update its genre: ");
  let genre = prompt("Enter new genre: ");

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movies[i].genre = genre;
    }
  }
};

const updateRate = () => {
  let id = prompt("Enter id for the movie you want to update its rate: ");
  let rate = prompt("Enter new rate: ");

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movies[i].rate = rate;
    }
  }
};

const update = () => {
  console.log(`
    ***********************************
    1. Update movie title
    2. Update movie director
    3. Update movie release year
    4. Update movie genre
    5. Update movie rate
    --WHAT DO YOU WANT TO UPDATE--
    ***********************************
    `);

  let choice = parseInt(prompt("What's your choice? "));
  switch (choice) {
    case 1:
      updateTitle();
      break;

    case 2:
      updateDirector();
      break;

    case 3:
      updateReleaseYear();
      break;

    case 4:
      updateGenre();
      break;

    case 5:
      updateRate();
      break;

    default:
      console.log("Your choice must be from 1 to 5, please.");
  }
};

const deleteMovie = () => {
  let id = prompt("Enter movie id you want to delete: ");
  let m;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      m = i;
    }
  }
  movies.splice(m, 1);
  console.log("deleted :)");
};

const searchByTitle = () => {
  let title = prompt("Title: ");

  let arr = movies.filter((movie) => {
    return movie.title == title;
  });
  if (arr.length == 0) {
    console.log("There is no such movies :(");
  } else {
    console.log(arr);
  }
};

const searchByDirector = () => {
  let director = prompt("Director: ");

  let arr = movies.filter((movie) => {
    return movie.director == director;
  });
  if (arr.length == 0) {
    console.log("There is no such movies :(");
  } else {
    console.log(arr);
  }
};

const searchByreleaseYear = () => {
  let releaseYear = prompt("Release Year: ");

  let arr = movies.filter((movie) => {
    return movie.releaseYear == releaseYear;
  });
  if (arr.length == 0) {
    console.log("There is no such movies :(");
  } else {
    console.log(arr);
  }
};

const searchByGenre = () => {
  let genre = prompt("Genre: ");

  let arr = movies.filter((movie) => {
    return movie.genre == genre;
  });
  if (arr.length == 0) {
    console.log("There is no such movies :(");
  } else {
    console.log(arr);
  }
};

const searchByRate = () => {
  let rate = prompt("Rate: ");

  let arr = movies.filter((movie) => {
    return movie.rate == rate;
  });
  if (arr.length == 0) {
    console.log("There is no such movies :(");
  } else {
    console.log(arr);
  }
};

const search = () => {
  console.log(`
    *****************************************
    1. Search by title
    2. Search by director
    3. Search by release year
    4. Search by genre
    5. Search by rate
    --MAKE CRITERIA YOU WANT TO SEARCH BY?--
    *****************************************
    `);

  let choice = parseInt(prompt("What's your choice? "));
  switch (choice) {
    case 1:
      searchByTitle();
      break;

    case 2:
      searchByDirector();
      break;

    case 3:
      searchByreleaseYear();
      break;

    case 4:
      searchByGenre();
      break;

    case 5:
      searchByRate();
      break;

    default:
      console.log("Your choice must be from 1 to 5, please.");
  }
};

const sortByRate = () => {
  movies.sort((a, b) => a.rate - b.rate).reverse();
  console.log("The movies sorted by rates :)");
};

const saveToJson = () => {
  fs.writeFile("movies.json", JSON.stringify(movies), "utf-8", (err) => {
    if (err) {
      console.log("Something went while saving to the file :(");
      console.log(err.message);
    } else {
      console.log("saved to json file :)");
    }
  });
};

const fetchFromAPI = () => {
  let Link = prompt("Enter the link of the API: ");
  fetch(Link, { method: "GET" })
    .then(async (res) => {
      const data = await res.json();
      fs.writeFile("movies.json", JSON.stringify(data), "utf-8", (err) => {
        if (err) {
          console.log("Something went while writing to the file :(");
          console.log(err.message);
        } else {
          console.log("saved to json file :)");
        }
      });
    })
    .catch((err) => {
      console.log("failed to fetch data!");
      console.log(err);
    });
};

module.exports = {
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
};
