const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const List = require("../models/list");
const Game = require("../models/game");
const Book = require("../models/book");
const Movie = require("../models/movie");

router.get("/", (request, response) => {
    List.model.find({}).populate("game").populate("book").populate("movie").exec((error, data) => {
        return error
        ? response.sendStatus(500).json(error)
        : response.json(data);
    });
  });

  module.exports = router;