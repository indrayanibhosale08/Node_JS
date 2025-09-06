const http = require ('http');


const server = http.createServer(function (req,res){
  console.log(req.url, req.method,req.headers);
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>1st Node Server</title></head>');
  res.write('<body><h1>Full Stack</h1></body>');
  res.write('</html>');
  res.end();
  // process.exit();
});


const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Server running at https://localhost:${PORT}`);
}); 