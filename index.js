var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var exphbs = require('express-handlebars')
var topics = require('./views/topics');
var produce = require('./views/produce');
var subscribe = require('./views/subscribe');
var hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    // Specify helpers which are only registered on this instance.
    helpers: {
        call: function(fn) {
            return new exphbs.SafeString("(" +
                fn.toString().replace(/\"/g, "'") + ")()");
        }
    }
});

// application routes
app.all('/topics', topics);
app.get('/produce/:topic', produce);
app.get('/subscribe/:topic', subscribe);

// parse application/x-www-form-urlencoded (extended is true for nested-object-requests)
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Register `hbs.engine` with the Express app.
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('index', {
        connectionString: '',
        helpers: {}
    })
})

app.listen(3000, function() {
    console.log('Listening on port 3000')
})