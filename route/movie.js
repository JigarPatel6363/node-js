const express = require("express");
const route = express.Router();
const movieModel = require("../model/movie");
const { createData, readData, readOneData, updateData, deleteData } = require("../controller/movie");
const {authSession , tokenAuth} = require("../middleware/auth")

route.post("/create", createData);

route.get("/read", tokenAuth , readData);

route.get("/readOne/:id", readOneData);

route.put("/update/:id", updateData);

route.delete("/delete/:id", deleteData)

module.exports = route;