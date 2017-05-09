import * as mongoose from "mongoose";

interface IUser {
  name: string,
  email: string,
  password: string,
  city: string,
  state: string,
  country: string
}

interface IUserModel extends IUser, mongoose.Document{};

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    city: String,
    state: String,
    country: String
});

var User = mongoose.model<IUserModel>("User", userSchema);

export = User;
