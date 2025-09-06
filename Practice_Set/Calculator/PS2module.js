const http =require('http');
const {requestHandler}=require ("./PS2");

const server = http.createServer(requestHandler);

server.listen(3000, () =>{
  console.log("server running at http://localhost:3000");
});