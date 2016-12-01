var Quote = require('../dbs.js');

module.exports = function(app){
  if(!app){
    throw new Error("Must provide app object!");
  }

  //new
  app.get('/', function(req,res){
    res.render('index');
  });

  app.get('/quotes', function(req, res){
    Quote.find({}, function(err, results){
      if(err) { console.log(err); }
      res.render('quote', { quotes: results });
    });
  });

  app.post('/quotes',function(req,res){
    Quote.create(req.body, function(err){
      if (err) { console.log(err); }
      res.redirect('/quotes')
    });
  });

};
