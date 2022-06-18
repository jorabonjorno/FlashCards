const fsp = require('fs/promises');
const rl  = require('readline/promises').createInterface(process.stdin, process.stdout);

const Controller = require("./src/Controller");
const Model      = require("./src/Model");
const View       = require("./src/View");

const model      = new Model(fsp);
const view       = new View(rl);
const controller = new Controller(model, view);

controller.run();
