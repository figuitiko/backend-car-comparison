//create a boilerplate for the server express
const express = require('express');
const startDb = require('./config/db.connect');
const userRouter = require('./routes/user.routes');
const kavakRouter = require('./routes/kavak.routes');
const app = express();
const port = 3000;
require('dotenv').config();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));
startDb();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRouter)
app.use(kavakRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
