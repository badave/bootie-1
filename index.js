"use strict";

// Dependencies
// ---
// Depends on `config` to be a global variable

// Module
// ---
// Only used by V2
// All your modules are belong to us.
// Export to global
var Bootie = {};

Bootie.Backbone = require('backbone');
Bootie._ = require('lodash');

// Database manager
// Bootie.Database = require('./database');
// Bootie.dbs = new Bootie.Database();
// Bootie.dbs.primary.connect();

// All external libraries
// ---

// Router
// [Annotated Source](router.html)
Bootie.Router = require('./router');

// Controller.
// [Annotated Source](controller.html)
Bootie.Controller = require('./controller');

// Crud Controller, extends Controller, adds CRUD routing.
// [Annotated Source](crud_controller.html)
Bootie.CrudController = require('./crud_controller');

// Model for the ORM.
// [Annotated Source](model.html)
Bootie.Model = require('./model');

// Collection for the ORM.
// [Annotated Source](collection.html)
Bootie.Collection = require('./collection');

// Adapters connect to third-party APIs and services.
// [Annotated Source](adapter.html)
Bootie.Adapter = require('./adapter');

// Renderers are the best
// [Annotated Source](renderer.html)
Bootie.Renderer = require('./renderer');

// Errors dawg.
// [Annotated Source](error.html)
Bootie.Error = require('./error');

// Queue processor (iron.io)
// [Annotated Source](queue.html)
Bootie.Queue = require('./queue');

// Queue jobs
// [Annotated Source](job.html)
Bootie.Job = require('./job');


// PeeGee is the Postgres database driver.
// [Annotated Source](peegee.html)
// Bootie.PeeGee = PeeGee;


// Mixin Backbone.Events so that Bootie can be a pubsub bus
Bootie._.extend(Bootie.prototype, Bootie.Backbone.Events, {
  VERSION: '0.1.5'
});

// Export to the world
module.exports = Bootie;