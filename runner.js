const fsp = require('fs/promises');
const Controller = require("./Controller");
const Model = require("./Model");
const View = require("./View");

const model = new Model(fsp);
const view = new View
const controller = new Controller(model, view)

controller.run()
