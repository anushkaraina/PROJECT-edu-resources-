const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/suggest") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      const line = `Website: ${data.name} - URL: ${data.url}\n`;

      fs.appendFile("suggestions.txt", line, (err) => {
        if (err) {
          res.writeHead(500);
          res.end("Error saving suggestion.");
        } else {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Thank you for your suggestion!");
        }
      });
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
