const jsonServer = require("json-server");
const https = require("https");
const path = require("path");
const fs = require("fs");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const keyFile = path.join(__dirname, "key.pem");
const certFile = path.join(__dirname, "cert.pem");

https
  .createServer(
    {
      key: fs.readFileSync(keyFile),
      cert: fs.readFileSync(certFile),
    },
    server
  )
  .listen(3000, () => {
    console.log("Go to https://localhost:3000/");
  });
