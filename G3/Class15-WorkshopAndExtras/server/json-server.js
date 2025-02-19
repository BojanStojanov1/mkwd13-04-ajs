import http from "http";
const PORT = 3000;

const data = {
  status: "success",
  message: "Welcome to the API",
  data: {
    name: "Ivan A.",
    age: 27,
    city: "Skopje",
    interests: ["coding", "reading", "traveling"],
  },
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify(data));
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
