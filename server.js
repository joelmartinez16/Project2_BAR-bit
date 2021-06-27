const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const router = require('./Api Routes'); 
const session = require('express-session'); 
const SequelizeStore = require('connect-session-sequelize')(session.Store); 


const sequelize = require('./Configuration/connection');

const app = express();
const PORT = process.env.PORT || 3001;


//Cookies
const sess = {
  secret: 'suprise me ',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);


app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
