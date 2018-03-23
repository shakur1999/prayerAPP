//here is where we connect to mongoose

const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/prayers");

mongoose.Promise = Promise;
//this is to tell mongoose to use promises straight to .then()

module.exports.PrayModel = require("./prayers");

// module.exports.prayers = ????

// again this file is just to connect to mongoose database features