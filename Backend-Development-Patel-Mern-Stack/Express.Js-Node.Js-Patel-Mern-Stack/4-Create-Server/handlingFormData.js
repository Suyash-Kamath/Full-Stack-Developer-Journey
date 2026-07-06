const http = require("http");

const server = http.createServer((req, res) => {
  // Handle POST method
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    // Collect data in chunks
    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert buffer to string
    });

    // Triggered when all data is received
    req.on("end", () => {
      try {
        const parsedBody = JSON.parse(body); // Parse the JSON data
        console.log(parsedBody);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: "Account Created Successfully",
          })
        );
      } catch (err) {
        // Handle JSON parsing errors
        console.error("Error parsing JSON:", err.message);
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            message: "Invalid JSON format",
          })
        );
      }
    });
  } else {
    // Handle other routes
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Not found" }));
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});

/*

req.on("data")
What it does: Listens for the data event, which is emitted whenever a chunk of data is received from the client.
Why it's needed: In Node.js, incoming HTTP request bodies (e.g., POST data) are read as a stream of data, which means the body is received in chunks rather than all at once.

req.on("end")
What it does: Listens for the end event, which is emitted when all chunks of the request body have been received and the stream has ended.
Why it's needed: This indicates that the request body has been fully received, and you can now process the entire body.


*/