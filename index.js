
"use strict";

var server = require("./built/server");
var http = require("http");

var app = server.Server.bootstrap().app;
app.set("port", 8081);
var httpServer = http.createServer(app);
httpServer.listen(8081);
