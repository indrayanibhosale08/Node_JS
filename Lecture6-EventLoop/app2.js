const http = require("http");
const fs = require("fs");
const { error } = require("console");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile("user.txt", JSON.stringify(bodyObject), error => {
        console.log("data written successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
 }
};
module.exports = userRequestHandler;
