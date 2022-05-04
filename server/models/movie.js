const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  yearReleased: String,
  genre: [String],
  distributor: String,
  picUrl: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
  model: Movie,
  schema: movieSchema
};
