"use strict";
const mongoose = require("mongoose");
;
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    city: String,
    state: String,
    country: String
});
var User = mongoose.model("User", userSchema);
module.exports = User;
