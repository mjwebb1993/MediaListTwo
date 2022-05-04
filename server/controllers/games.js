const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Game = require("../models/game");

//  Create a new order with customer, Game, delivery and notes documents
router.post("/", (request, response) => {
    const newGame = new Game.model(request.body);
    newGame.save((err, game) => {
      return err ? response.sendStatus(500).json(err) : response.json(Game);
    });
  });
  
  router.get("/", (request, response) => {
    Game.model.find({}, (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });
  
  router.get("/:id", (request, response) => {
    Game.model.findById(request.params.id, (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });
  
  router.put("/:id", (request, response) => {
    const body = request.body;
    Game.model.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          yearReleased: body.yearReleased,
          genre: body.genre,
          console: body.console,
          picUrl: body.picUrl
        }
      },
      (error, data) => {
        if (error) return response.sendStatus(500).json(error);
        return response.json(request.body);
      }
    );
  });
  
  router.delete("/:id", (request, response) => {
    Game.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });
  
  module.exports = router;