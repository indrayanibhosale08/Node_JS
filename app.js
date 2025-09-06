const http = require ('http');

const server = http.createServer (function(req,res){
console.log('hi');
})

const PORT =3000;

server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`);
})