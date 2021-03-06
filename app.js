const express = require('express');
const path = require('path');
const hbs = require('hbs');

hbs.registerPartials(path.join(__dirname, '/views/templates'));
hbs.partials = hbs.templates;  // this makes Vue parts work in hbs partials

// proxy stuff goes here

const app = express();
const port = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'));
app.listen(port, ()=>{
    console.log(`app is running at ${port}`);
})