var express = require('express'),
    path = require('path'),
    app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./routes.js')(app);


app.listen(8000, function(){
  console.log('Port 8000');
});
