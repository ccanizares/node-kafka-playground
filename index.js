var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var exphbs = require('express-handlebars')
var hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  // Specify helpers which are only registered on this instance.
  helpers: {
    globalHelper: function () {
      return 'GLOBAL_HELP!'
    }
  }
})

// parse application/x-www-form-urlencoded (extended is true for nested-object-requests)
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Register `hbs.engine` with the Express app.
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', {
    attribute: 'VALUE',

    helpers: {
      localHelper: function () {
        return 'LOCAL_HELP!'
      }
    }
  })
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
