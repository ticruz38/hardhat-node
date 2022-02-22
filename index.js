"use strict";
exports.__esModule = true;
var proxy = require("express-http-proxy");
var express = require("express");
var cors = require("cors");
var app = express();
app.set("trust proxy", true);
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use("/", proxy("http://bribe-node:8545", {
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
        proxyReqOpts.headers = {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Content-Type": "application/json",
            Accept: "application/json"
        };
        proxyReqOpts.credentials = true;
        return proxyReqOpts;
    }
}));
app.listen(4000, function () { return console.log("server started"); });
