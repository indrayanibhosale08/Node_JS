const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node Server</title></head>");
    res.write("<body><h1>Enter your Details </h1>");
    res.write("<h1>Welcome</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br> <br> ',
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="gender">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="gender">Female</label>');
    res.write('<button type="submit" >SUBMIT</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "indra");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server is running on http://localhost3000");
});
