"use strict";
const mongoose = require("mongoose");
;
var postSchema = new mongoose.Schema({
    subject: String,
    body: String,
    dateTime: { type: Date, default: Date.now },
    category: String,
    idUser: String
});
var Post = mongoose.model("Post", postSchema);
module.exports = Post;
