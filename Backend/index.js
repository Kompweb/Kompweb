const server = require("./api/server");

const PORT = 5000;
// const PORT = process.env.PORT || 5000;
const hostname = "127.0.0.1";
// the local computer where the server is running

server.listen(PORT, hostname, () => {
  // start watching for connections on the port specified
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
// server.listen(PORT, () => {
//   console.log('listening on', PORT)
// })
