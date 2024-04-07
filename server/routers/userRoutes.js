const express = require("express");
const Route = express.Router();
const userController = require("../controllers/userController");

Route.post("/Create",userController.createUser);
Route.get("/GetDocuments",userController.getAllDocuments)
Route.post("/Update",userController.updateDocument)
Route.post("/Delete",userController.deleteDocument)

module.exports = Route;