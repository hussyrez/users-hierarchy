// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const data = require('./models/users')

// defining the Express app
const host = 'localhost'
const port = 3000;
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send(data.users);
  });

app.get('/getsubordinates', (req, res) => {
    res.send(data.users);
  });

app.listen(port, () => {
  console.log(data.users)
});
