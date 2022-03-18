import http from 'http';
import fs from 'fs';
import mime from 'mime-types';

let lookup = mime.lookup;


const port = process.env.PORT || 3000;

//create server instance(immutable)
const server = http.createServer(function(req, res)
{
  

  let path = req.url as string ;

  if(path == "/")
  {
    path = "/index.html"
  }

  let mime_type = lookup(path.substring(1)) as string;

  fs.readFile(__dirname + path, function(err, data)
  {
    if(err){

      res.writeHead(404);
      res.end("ERROR 404 - filie not found" + err.message);
      return;
    }
    res.setHeader("X-Content-Type-Options", "nosniff");//security
    res.writeHead(200, {"Content-Type": mime_type});
    res.end(data);
  });

  /*res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');*/
});

server.listen(port,  () => {
  console.log(`Server running on Port: ${port}/`);
});

