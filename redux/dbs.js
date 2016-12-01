var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninja_quote');

var QuoteSchema = new mongoose.Schema({
  name : String,
  quote: String,
});

module.exports = mongoose.model('Quote', QuoteSchema);
