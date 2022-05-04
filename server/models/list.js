const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Demonstrate linking vs embedding
const listSchema = new mongoose.Schema({
    movie: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
    book: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    game: [{ type: Schema.Types.ObjectId, ref: "Game" }]
  });
  
  const List = mongoose.model("List", listSchema);
  
  module.exports = {
    model: List,
    schema: listSchema
  };
  