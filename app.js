const express = require("express");

const app = express(); // invoke

app.listen(3000);

app.get("/", (req,res)=>{
  res.send('./views/index.html');
})

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", {root: __dirname});
});

app.get('/aboutus', (req, res)=>{
  res.redirect('/about');
})

app.use((req,res)=>{
  res.status(400).sendFile('./views/404.html' , {root: __dirname});
})
