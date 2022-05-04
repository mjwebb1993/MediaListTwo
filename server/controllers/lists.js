const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const List = require("../models/list");

router.get("/", (request, response) => {
    List.model.find({}, (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(data);
    });
  });

  module.exports = router;