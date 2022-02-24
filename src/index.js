const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
var cors = require('cors');

const routes = require('./routes/vagas.routes')

//enables cors
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/vagas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, console.log('Connected to database'))


app.use(express.json());
app.use('/', routes)

app.listen(3333, () => console.log("Server rodando"));