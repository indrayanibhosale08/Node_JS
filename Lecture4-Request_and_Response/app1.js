const http = require("http");
const os =require ('os');

console.log(os.platform());
const server = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>1st Node Server</title></head>");

  if (req.url==='/'){
    res.write('<h1> Welcome to My Home Page </h1>');
   return res.end();
  }else if (req.url.toLowerCase() === '/products'){
    res.write('<h1>Products</h1>');
   return res.end();
  }
  res.write("<body><h1>Full Stack</h1></body>");
  res.write("</html>");
   return res.end();
  // if (req.url === "/home") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>1st Node Server</title></head>");
  //   res.write("<body><h1>Hello</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // } else if (req.url === "/products") {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>1st Node Server</title></head>");
  //   res.write("<body><h1>Lets Learn</h1></body>");
  //   res.write("</html>");
  //   return res.end();
  // }
  // res.setHeader("Content-Type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>1st Node Server</title></head>");
  // res.write("<body><h1>Full Stack</h1></body>");
  // res.write("</html>");
  // return res.end();
  // process.exit();
  
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}`);
});
