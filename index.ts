import * as proxy from "express-http-proxy";
import * as express from "express";
import * as cors from "cors";

const app = express();

app.set("trust proxy", true);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(
  "/",
  proxy("http://bribe-node:8545", {
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
      proxyReqOpts.headers = {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Method": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      proxyReqOpts.credentials = true;
      return proxyReqOpts;
    },
  })
);

app.listen(4000, () => console.log("server started"));
