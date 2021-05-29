const express = require('express');
const app = express();
const path = require('path');
const config = require('./config.json')

const port = process.env.PORT || 80

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})