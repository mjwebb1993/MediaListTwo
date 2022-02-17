import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";
import Navigo from "navigo";
import capitalize from "lodash";
import dotenv from "dotenv";

dotenv.config();

let API_URL;

if (process.env.API_URL) {
  API_URL = process.env.API_URL || "http://localhost:4040";
} else {
  console.error("Please create the .env file with a value for API_URL");
}

const router = new Navigo("/");

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();

  addEventListenersByView(st);
}

function addEventListenersByView(st) {
  // Add to every view
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // Add event listeners for the Form view
  if (st.view === "Movie") {
    // console.log("I'm rendering movie");
    document.querySelectorAll("#selectButtonFuture").forEach(button => {
      button.addEventListener("click", event => {
        // console.log("events target", event.target.attributes);
        // create a new object with all key attributes and push into future list
        function Movie(name, genre, yearReleased, picUrl) {
          this.name = name;
          this.genre = genre;
          this.yearReleased = yearReleased;
          this.picUrl = picUrl;
        }
        let newMovie = new Movie(
          event.target.attributes["data-name"].value,
          event.target.attributes["data-genre"].value,
          event.target.attributes["data-year"].value,
          event.target.attributes["data-img"].value
        );
        state.User.futureListMovie.push(newMovie);
        // console.log(state.User.futureList);
      });
    });
  }
  if (st.view === "Movie") {
    // console.log("I'm rendering movie");
    document.querySelectorAll("#selectButtonPast").forEach(button => {
      button.addEventListener("click", event => {
        // console.log("events target", event.target.attributes);
        // create a new object with all key attributes and push into future list
        function Movie(name, genre, yearReleased, picUrl) {
          this.name = name;
          this.genre = genre;
          this.yearReleased = yearReleased;
          this.picUrl = picUrl;
        }
        let newMovie = new Movie(
          event.target.attributes["data-name"].value,
          event.target.attributes["data-genre"].value,
          event.target.attributes["data-year"].value,
          event.target.attributes["data-img"].value
        );
        state.User.pastListMovie.push(newMovie);
      });
    });
  }
  if (st.view === "Game") {
    // console.log("I'm rendering movie");
    document.querySelectorAll("#selectButtonFuture").forEach(button => {
      button.addEventListener("click", event => {
        // console.log("events target", event.target.attributes);
        // create a new object with all key attributes and push into future list
        function Game(name, genre, yearReleased, picUrl) {
          this.name = name;
          this.genre = genre;
          this.yearReleased = yearReleased;
          this.picUrl = picUrl;
        }
        let newGame = new Game(
          event.target.attributes["data-name"].value,
          event.target.attributes["data-genre"].value,
          event.target.attributes["data-year"].value,
          event.target.attributes["data-img"].value
        );
        state.User.futureListGame.push(newGame);
        // console.log(state.User.futureList);
      });
    });
  }
  if (st.view === "Game") {
    // console.log("I'm rendering movie");
    document.querySelectorAll("#selectButtonPast").forEach(button => {
      button.addEventListener("click", event => {
        // console.log("events target", event.target.attributes);
        // create a new object with all key attributes and push into future list
        function Game(name, genre, yearReleased, picUrl) {
          this.name = name;
          this.genre = genre;
          this.yearReleased = yearReleased;
          this.picUrl = picUrl;
        }
        let newGame = new Game(
          event.target.attributes["data-name"].value,
          event.target.attributes["data-genre"].value,
          event.target.attributes["data-year"].value,
          event.target.attributes["data-img"].value
        );
        state.User.pastListGame.push(newGame);
        // console.log(state.User.pastList);
      });
    });
  }
  if (st.view === "Book") {
    // console.log("I'm rendering movie");
    document.querySelectorAll("#selectButtonFuture").forEach(button => {
      button.addEventListener("click", event => {
        // console.log("events target", event.target.attributes);
        // create a new object with all key attributes and push into future list
        function Book(name, genre, yearReleased, picUrl, author) {
          this.name = name;
          this.genre = genre;
          this.yearReleased = yearReleased;
          this.picUrl = picUrl;
          this.author = author;
        }
        let newBook = new Book(
          event.target.attributes["data-name"].value,
          event.target.attributes["data-genre"].value,
          event.target.attributes["data-year"].value,
          event.target.attributes["data-img"].value,
          event.target.attributes["data-author"].value
        );
        state.User.futureListBook.push(newBook);
        // state.User.futureList.push(event.target.attributes.data.value);
        // console.log(state.User.futureList);
      });
    });
  }
  if (st.view === "Book") {
    // console.log("I'm rendering movie");
    document.querySelectorAll("#selectButtonPast").forEach(button => {
      button.addEventListener("click", event => {
        // console.log("events target", event.target.attributes);
        // state.User.pastList = [];
        function Book(name, genre, yearReleased, picUrl, author) {
          this.name = name;
          this.genre = genre;
          this.yearReleased = yearReleased;
          this.picUrl = picUrl;
          this.author = author;
        }
        let newBook = new Book(
          event.target.attributes["data-name"].value,
          event.target.attributes["data-genre"].value,
          event.target.attributes["data-year"].value,
          event.target.attributes["data-img"].value,
          event.target.attributes["data-author"].value
        );
        state.User.pastListBook.push(newBook);
        // console.log(state.User.pastList);
      });
    });
  }
}

function fetchDataByView(done, st = state.Home) {
  // console.log('matsinet-st.view:', st.view);
  switch (st.view) {
    case "Media":
      // axios.get("https://medialistapi.herokuapp.com/listMedia").then(
      axios.get(`${process.env.MEDIA_API_URL}/listMedia`).then(response => {
        // console.log("response", response);
        state.Media.lists = [];
        state.Media.lists.games = response.data.Games;
        state.Media.lists.books = response.data.Books;
        state.Media.lists.movies = response.data.Movies;
        // let arrayTest = ["test"];
        // console.log(arrayTest);
        // let arrayFiller = "filler";
        // arrayTest.push(arrayFiller, "more test");
        // console.log(arrayTest);
        // console.log("lists", state.Media.lists);
        done();
      });
      break;
    case "Game":
      state.Game.games = [];
      axios.get(`${process.env.MEDIA_API_URL}/listGames`).then(response => {
        response.data.forEach(game => {
          state.Game.games.push(game);
        });
        done();
      });
      break;
    case "Book":
      state.Book.books = [];
      axios.get(`${process.env.MEDIA_API_URL}/listBooks`).then(response => {
        response.data.forEach(book => {
          state.Book.books.push(book);
          console.log("Books", state.Book.books);
        });
        done();
      });
      break;
    case "Movie":
      state.Movie.movies = [];
      axios.get(`${process.env.MEDIA_API_URL}/listMovies`).then(response => {
        response.data.forEach(movie => {
          state.Movie.movies.push(movie);
        });
        done();
      });
      break;
    case "User":
      // axios.get("https://medialistapi.herokuapp.com/listMedia").then(
      axios.get(`${process.env.MEDIA_API_URL}/listMedia`).then(response => {
        state.User.users = [];
        state.User.users.games = response.data.Games;
        state.User.users.books = response.data.Books;
        state.User.users.movies = response.data.Movies;
        let arrayTest = ["test"];
        console.log(arrayTest);
        let arrayFiller = "filler";
        arrayTest.push(arrayFiller, "more test");
        console.log(arrayTest);
        console.log("lists", state.User.users);
        done();
      });
      break;
    // case "Home":
    //   state.Home.examples = [];
    //   axios.get(`${process.env.MEDIA_API_URL}/listGames`).then(response => {
    //     // console.log("response", response);
    //     response.data.forEach(example => {
    //       if (example.name == "Mass Effect") {
    //         state.Home.examples.push(example);
    //       }
    //     });
    //     // console.log(state.Home.examples);
    //     done();
    //   });
    //   axios.get(`${process.env.MEDIA_API_URL}/listMovies`).then(response => {
    //     // console.log("response", response);
    //     response.data.forEach(example => {
    //       if (example.name == "Endgame" || example.name == "Furious 7") {
    //         state.Home.examples.push(example);
    //       }
    //     });
    //     // console.log(state.Home.examples);
    //     done();
    //   });
    //   axios.get(`${process.env.MEDIA_API_URL}/listBooks`).then(response => {
    //     // console.log("response", response);
    //     response.data.forEach(example => {
    //       if (example.name == "The Last Samurai") {
    //         state.Home.examples.push(example);
    //       }
    //     });
    //     // console.log(state.Home.examples);
    //     done();
    //   });
    //   break;
    default:
      done();
  }
}


router.hooks({
  before: (done, params) => {
    // Because not all routes pass params we have to guard against is being undefined
    const page = params && params.data && params.data.hasOwnProperty("view") ? capitalize(params.data.view) : "Home";
    console.log('matsinet-state[page]:', state[page]);

    fetchDataByView(done, state[page]);
  }
});

router
  .on({
    "/": () => {
      render(state.Home);
    },
    ":view": params => {
      let view = capitalize(params.data.view);
      render(state[view]);
    }
  })
  .resolve();
