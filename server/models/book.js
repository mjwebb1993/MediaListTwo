const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  yearReleased: String,
  genre: [String],
  author: String,
  picUrl: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = {
  model: Book,
  schema: bookSchema
};
