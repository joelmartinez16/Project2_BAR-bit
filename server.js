const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const router = require('./Api Routes');



const app = express();
const PORT = process.env.PORT || 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);


app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
