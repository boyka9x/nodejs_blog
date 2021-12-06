const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const sortMiddleware = require('./app/middlewares/sortMiddleware');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Form data
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// Ajax
app.use(express.json());

app.use(methodOverride('_method'));

// Custom middleware
app.use(sortMiddleware);

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: require('./helpers/handlebars')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
