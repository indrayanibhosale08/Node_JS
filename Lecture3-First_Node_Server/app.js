const http = require ('http');

// function requestListener(req,res){
//   console.log(req);
// }

// http.createServer(requestListener);

// const server = http.createServer(function (req,res){
//   console.log(req);
//   process.exit();
// });

const server = http.createServer(function (req,res){
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Server running at https://localhost:${PORT}`);
}); 