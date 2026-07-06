const http = require("http");
const { json } = require("stream/consumers");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello I am coming from Node.js server");
// }
// )
// server.listen(8000, () => {
//   console.log("Server is running on port 3000");
// })

/*


In the context of your Node.js server code:

res.end Explained
The res.end() method is part of the HTTP module in Node.js. It is used to end the response process when working with an HTTP server.

When you call res.end(), it does the following:

Signals that the response headers and body are complete.
Sends the response to the client.
Closes the connection (or signals that the server has finished sending the response for this request).

*/

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home");
  } else if (req.url === "/api/user") {
    const user = {
      name: "Suyash",
      age: 21,
      email: "suyash@google.com",
    };
    const jsonData = JSON.stringify(user);
    console.log(JSON.parse(jsonData)); // object is converted to JSON

    /**
     JSON.stringify(user):

Converts a JavaScript object (user) into a JSON string.
For example, if user is { name: "Suyash", age: 21 }, the result is a string:
'{ "name": "Suyash", "age": 21 }'.
JSON.parse(jsonData):

Converts the JSON string back into a JavaScript object.
Takes the string '{ "name": "Suyash", "age": 21 }' and turns it into an object:
{ name: "Suyash", age: 21 }.
     */

    res.writeHead(200, { "Content-Type": "apllication/json" });
    res.end(jsonData);
  } else if (req.url === "/login") {

  /*
  application/json tells the client to parse the response as JSON.
text/json might confuse the client into treating it as plain text, which could lead to incorrect handling or errors.

  */
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Login");
  } else if (req.url === "/signup") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Signup");
  }
  else{
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
