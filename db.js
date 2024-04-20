// const mongoose =require("mongoose");


// // define mongo db url
// const mongoURL = 'mongodb://localhost:27017/myhotels';

// mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// const db = mongoose.connection;

// db.on('connected', () =>{
//   console.log("connected to mongo db");
// });

// db.on('error' , ()=>{
//   console.error("mongoDB connection error", err);
// });

// db.on('disconnected' , () =>{
//   console.log('mongoDb disconnected');
// });

// module.exports = db;

const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/myhotel';

mongoose.connect( mongoURL , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected' , ()=>{
  console.log('connected to , mongodb');
}) 


db.on("error", (err) => {
  console.log("error",err);
}); 


db.on("disconnected", () => {
  console.log("MongoDB disconnected.");
}); 

module.exports = db;