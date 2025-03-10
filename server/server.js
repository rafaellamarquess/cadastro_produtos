const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const app = express();
const apiServer = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(express.static(path.join(__dirname, "public")));

apiServer.use(middlewares);
apiServer.use(router);
app.use("/api", apiServer);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});