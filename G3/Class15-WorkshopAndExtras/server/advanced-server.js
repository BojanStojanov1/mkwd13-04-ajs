import http from "http";
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Home Page</h1><p>Welcome to the home page!</p>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>About Page</h1><p>This page will give you more info about us</p>"
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found!</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
