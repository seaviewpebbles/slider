const express = require('express');
const bodyParser = require('body-parser'); 
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));


// body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


app.get('/', (req, res) => {

res.render('toronto');

});

app.post('/send', (req, res) => {

console.log(req.body);

});

app.listen(3000, () => console.log('server started...'));






