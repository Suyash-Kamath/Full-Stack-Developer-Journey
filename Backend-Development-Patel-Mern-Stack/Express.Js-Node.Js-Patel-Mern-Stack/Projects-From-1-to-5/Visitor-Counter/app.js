const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");
const path = require("path");

// Initialize EventEmitter
const eventEmitter = new EventEmitter();

// File to store visitor count
const countFile = path.join(__dirname, "visitorCount.txt");

// Function to get the current count
const getCount = () => {
  if (!fs.existsSync(countFile)) {
    fs.writeFileSync(countFile, "0"); // Initialize file with 0 if it doesn't exist
  }
  const count = fs.readFileSync(countFile, "utf8");
  return parseInt(count, 10);
};

// Function to update the count
const updateCount = (count) => {
  fs.writeFileSync(countFile, count.toString());
};

// Set up the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Increment visitor count
    let currentCount = getCount();
    currentCount += 1;
    updateCount(currentCount);

    // Emit an event for each visit
    eventEmitter.emit("visit", currentCount);

    // Serve HTML file
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Visitor Counter</title>
      </head>
      <body>
        <h1>Welcome to the Visitor Counter!</h1>
        <p>You are visitor number: <strong>${currentCount}</strong></p>
      </body>
      </html>
    `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Log visits using EventEmitter
eventEmitter.on("visit", (count) => {
  console.log(`New visitor! Total visits: ${count}`);
});

// Start the server
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
