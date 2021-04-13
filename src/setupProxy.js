let jsonServer = require("json-server");
const router = jsonServer.router("db.json");

module.exports = function (app) {
    app.use('/api',router)
};