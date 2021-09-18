// importing the dependencies
import express, { Request, Response } from "express";
import * as bodyParser from 'body-parser';
// import { UserController } from "./api/controllers/UserController";
// import { RoleController } from "./api/controllers/RoleController";
const usersRoutes = require('./routes/users.routes');
const rolesRoutes = require('./routes/roles.routes');

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const data = require('./models/users')

// defining the Express app
const host = 'localhost'
const port = 3000;
const app = express();
const router = express.Router();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());
app.use("/", usersRoutes);
app.use('/api/users', usersRoutes);
// app.use('/api/roles', rolesRoutes);

// defining an endpoint to return all ads
// app.get('/', (req: Request, res: Response) => {
//     res.send(data.users);
//   });

// app.get('/getsubordinates', (req: Request, res: Response) => {
//     res.send(data.users);
//   });

app.listen(port, () => {
  console.log(data.users)
});
