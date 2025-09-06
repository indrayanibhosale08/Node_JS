const { sumRequestHandler } = require("../sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculator</title>
      </head>
      <body>
        <h1>Welcome to SmartCalc!</h1>
        <h3>Get ready to solve your problems in just a few clicks.</h3>
        <nav>
          <ul>
            <li><a href="/calculator">Link for Calculator</a></li>
          </ul>
        </nav>
      </body>
      </html>
    `);
    return res.end();

  } else if (req.url.toLowerCase() === "/calculator" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Calculator</title>
        </head>
        <body>
          <h1>Welcome to Calculator</h1>
          <form action="/calculator-result" method="post">
            <label for="num1">Number 1:</label>
            <input type="number" id="num1" name="num1" required /><br><br>
            <label for="num2">Number 2:</label>
            <input type="number" id="num2" name="num2" required /><br><br>
            <input type="submit" value="Sum">
          </form>
        </body>
      </html>
    `);
    return res.end();

  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page Not Found</h1>");
    return res.end();
  }
};

exports.requestHandler = requestHandler;
