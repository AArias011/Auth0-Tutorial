
//this imports the dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//defines express app
const app = express();

//defines array to work as the database
const ads = [
    {title: 'Hello, world (again)!'}
];

//this adds helmet, which enhances the security of your API
app.use(helmet());

//bodyParser parses JSON bodies into JS objects
app.use(bodyParser.json());

//this enables CORS for all requests
app.use(cors());

//this adds morgan to log different HTTP requests
app.use(morgan('combined'));

//defines an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(ads);
});

//this starts the server
app.listen(500, () => {
    console.log('listening on port 500');
});