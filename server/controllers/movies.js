const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/movie");

//  Create a new order with customer, Movie, delivery and notes documents
router.post("/", (request, response) => {
    const newMovie = new Movie.model(request.body);
    newMovie.save((err, movie) => {
      return err ? response.sendStatus(500).json(err) : response.json(Movie);
    });
  });
  
  router.get("/", (request, response) => {
    Movie.model.find({}, (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });
  
  router.get("/:id", (request, response) => {
    Movie.model.findById(request.params.id, (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });
  
  router.put("/:id", (request, response) => {
    const body = request.body;
    Movie.model.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          yearReleased: body.yearReleased,
          genre: body.genre,
          distributor: body.distributor,
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
    Movie.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });
  
  module.exports = router;