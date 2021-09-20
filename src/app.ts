// importing the dependencies
import express, { Request, Response } from "express";
import * as bodyParser from 'body-parser';
const usersRoutes = require('./routes/users.routes');
const rolesRoutes = require('./routes/roles.routes');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require("swagger-ui-express");
import { swaggerDocument } from "./swagger";

// defining the Express app
const host = 'localhost'
const port = 3000;
const app = express();
// const router = express.Router();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

app.use('/api/docs' , swaggerUi.serve , swaggerUi.setup(swaggerDocument));

app.use('/api/users', usersRoutes);
app.use('/api/roles', rolesRoutes);

app.listen(port, () => {

});
