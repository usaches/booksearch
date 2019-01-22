const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String},
  subtitle: { type: String },
  authors: { type: [String]},
  link: { type: String},
  description: { type: String},
  image: { type: String},
  googleId: { type: String}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
