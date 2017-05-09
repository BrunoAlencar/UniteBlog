"use strict";
const mongoose = require("mongoose");
;
var postSchema = new mongoose.Schema({
    subject: String,
    body: String,
    dateTime: Date,
    category: String,
    user: String
});
var Post = mongoose.model("Post", postSchema);
module.exports = Post;
