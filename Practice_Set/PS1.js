const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/Home") {
      res.write("<h1>Welcome to Home</h1>");
      return res.end();
    }
    else if (req.url === "/Men") {
      res.write("<h1>Welcome to Men</h1>");
      return res.end();
    }
    else if (req.url === "/Women") {
      res.write("<h1>Welcome to Women</h1>");
      return res.end();
    }
    else if (req.url === "/Kids") {
      res.write("<h1>Welcome to Kids</h1>");
      return res.end();
    }
    else if (req.url === "/Cart  "){
      res.write("<h1>Welcome to Cart</h1>");
      return res.end();
    }

  res.write(
    `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Men">Men</a></li>
        <li><a href="/Women">Women</a></li>
        <li><a href="/Kids">Kids</a></li>
        <li><a href="/Cart">🛒</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>`
  );
  res.end();

  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>Myntra</title></head>");
  //   res.write('<a htef="/Home">Home</a><br><br>');
  //   res.write('<a htef="/Men">Men</a><br><br>');
  //   res.write('<a htef="/Women">Women</a><br><br>');
  //   res.write('<a htef="/Kids">Kids</a><br><br>');
  //   res.write('<a htef="/Cart">Cart</a>');
  //   if (req.url === "/Home") {
  //     console.log("Welcome to Home");
  //   }
  //   else if (req.url === "/Men") {
  //     console.log("Welcome to Men");
  //   }
  //   else if (req.url === "/Women") {
  //     console.log("Welcome to Women");
  //   }
  //   else if (req.url === "/Kids") {
  //     console.log("Welcome to Kids");
  //   }
  //   else {
  //     console.log("Welcome to Cart");
  //   }
});

server.listen(3000, () => {
  console.log("Server running at https://localhost:3000");
});
