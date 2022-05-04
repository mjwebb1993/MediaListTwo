const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const book = require("./book");
const game = require("./game");
const movie = require("./movie");

// Demonstrate linking vs embedding
const listSchema = new mongoose.Schema({
    movie: [movie.schema],
    book: [book.schema],
    game: [game.schema]
  });
  
  const List = mongoose.model("List", listSchema);
  
  module.exports = {
    model: List,
    schema: listSchema
  };
  