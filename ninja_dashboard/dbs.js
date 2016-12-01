var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninja_dash');

var NinjaSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model('Ninja', NinjaSchema);
