const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

route.get("/", services.homeRoutes);

route.get("/add-user", services.add_user);
route.get("/update-user", services.update_user);
route.get("/delete-user", controller.delete);

route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
// route.get("/api/users/:id", controller.delete);
route.put("/api/users/:id", controller.update);

module.exports = route;
