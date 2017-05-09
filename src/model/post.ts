import * as mongoose from "mongoose";
import * as User from "./user";

interface IPost {
  subject: string,
  body: string,
  dateTime: Date,
  category: string,
  idUser: string
}

interface IPostModel extends IPost, mongoose.Document { };

var postSchema = new mongoose.Schema({
  subject: String,
  body: String,
  dateTime: { type: Date, default: Date.now },
  category: String,
  idUser: String
});

var Post = mongoose.model<IPostModel>("Post", postSchema);

export = Post;
