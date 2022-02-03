const express = require("express");
const app = express();
const routers = require('./router');
const cors = require("cors");


app.use(cors());


app.use('/response', routers);


app.listen(3001);
