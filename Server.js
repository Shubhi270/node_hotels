// server creation
// http import

const http = require('http');
const fs = require('fs');
//server create method

const server = http.createServer((req , res) =>{
  console.log("request has been made from browser to server");
  //console.log(req);
  res.setHeader('Content-Type', 'Text/html');
  
  let path = "./views";

  switch(req.url){
    case '/':
      path+='/index.html'
      break;
      case '/about':
      path+='/about.html'
      break;
      default:
        path+='/404.html'
        break;
  };
  
  fs.readFile(path, (err, file) => {
    if (err) {
      console.log(err);
    } else {
      res.write(file);
      res.end();
    }
  });
  
  
}) 

server.listen(3000, 'localhost' , ()=>{
  console.log("server is listening on port 3000");
});

// port number, from where request is comming