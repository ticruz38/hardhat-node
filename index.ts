import * as proxy from "express-http-proxy";
import * as express from "express";
import * as cors from "cors";
import * as apicache from "apicache";

const app = express();

const cache = apicache.middleware;

app.set("trust proxy", true);

app.use(cache("5 minutes"));

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.use(cors());

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
