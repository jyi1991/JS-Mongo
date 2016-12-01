var Ninja = require('./dbs.js');

module.exports = function(app){
  if(!app){ throw new Error("Must provide app object!");}

  //grabs all ninjas
  app.get('/ninjas',function(req,res){
    Ninja.find({}, function(err, results){
      if (err) { console.log(err); }
    res.render('index', { ninjas: results });
    });
  });
  //reroutes back to
  app.get('/',function(req,res){
    res.redirect('/ninjas');
  });
  //CREATE
  app.post('/ninjas', function(req, res){
    Ninja.create(req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/')
    });
  });
  // New page
  app.get('/ninjas/new', function(req, res){
    res.render('new');
  });

  // Update
  app.get('/:id', function(req, res){
    Ninja.findById({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
    res.render('edit', { ninjas: response });
    })
  });

  app.post('/:id', function(req, res){
    Ninja.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
    res.redirect('/');
    });
  });

  // Delete
  app.post('/:id/delete', function(req, res){
    Ninja.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
    res.redirect('/');
    });
  });

};
