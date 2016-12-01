var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');
    port = 8000;
    app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./route/route.js')(app);
app.listen(port, function(){
  console.log("Running on port", port);
})
