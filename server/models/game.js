const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  yearReleased: String,
  genre: [String],
  console: String,
  picUrl: String
});

const Movie = mongoose.model("Game", gameSchema);

module.exports = {
  model: Game,
  schema: gameSchema
};
