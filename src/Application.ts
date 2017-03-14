import express = require("express");
import morgan = require("morgan");
import load = require("express-load");

declare const __dirname;

let app = express();
app.use(morgan("dev"));

load("routes", { cwd: __dirname })
    .into(app);

export = app;
