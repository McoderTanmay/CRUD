const express = require("express");
const Route = express.Router();
const userController = require("../controllers/userController");

Route.post("/Create",userController.createUser);
Route.get("/GetDocuments",userController.getAllDocuments)
Route.get("/GetOneDocument/:id",userController.getDocumentById)
Route.post("/Update/:id",userController.updateDocument)
Route.post("/Delete/:id",userController.deleteDocument)

module.exports = Route;