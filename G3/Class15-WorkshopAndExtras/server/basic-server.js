import http from "http";
const PORT = 3000;

const server = http.createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
