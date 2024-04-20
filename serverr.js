const  express = require('express');

const app = express();

const db = require('./db');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Person = require('./models/person');

const Menu = require('./models/menu');

app.get("/" , function(req, res){
  res.send("welcome!")
})
const personRoutes = require('./Routes/personRoutes');

const menuRoutes = require('./Routes/menuRoutes');

app.use('/person' , personRoutes);

app.use("/menu", menuRoutes);

app.listen(3000 , () =>{
  console.log('listening on port 3000');
})