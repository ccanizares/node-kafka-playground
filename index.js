var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var hbs = exphbs.create({
  defaultLayout: "main",
  // Specify helpers which are only registered on this instance. 
  helpers: {
    globalHelper: function () {
      return 'GLOBAL_HELP!';
    },
  }
});

// Register `hbs.engine` with the Express app. 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    attribute: "VALUE",

    helpers: {
      localHelper: function() {
        return "LOCAL_HELP!"
      }
    }
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});