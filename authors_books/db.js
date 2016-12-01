var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/books");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AuthorSchema = new Schema({
  name: String,
  book:[{type: ObjectId, ref:'Book'}]
});

var BooksSchema = new Schema ({
  title:String,
  genre: String,
  authors:{type: ObjectId, ref: 'Author'}
});

var Book = mongoose.model('Book', BookSchema);
var Author = mongoose.model('Author', AuthorSchema);


var Hienlien = new Author({
  name : 'Hienlien'
})
