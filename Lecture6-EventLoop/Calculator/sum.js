const sumRequestHandler = (req, res) => {
  console.log("1. In sum request handler", req.url);

  const body = [];

     req.on("data", (chunk) => {
    body.push(chunk); 
    console.log("2. Chunk came");
  });

  req.on("end", () => {
    console.log("3. request ended")
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    const num1 = Number(bodyObj.num1);
    const num2 = Number(bodyObj.num2);
    const result = num1 + num2;

    console.log(`Sum of ${num1} and ${num2} is ${result}`);
    console.log("4.sending the response")
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Calculator Result</title>
      </head>
      <body>
        <h1>Calculator Result</h1>
        <p>Sum of ${num1} and ${num2} is <strong>${result}</strong></p>
        <a href="/calculator">Back to Calculator</a>
      </body>
      </html>
    `);
    res.end();
    
  });
};

exports.sumRequestHandler = sumRequestHandler;
