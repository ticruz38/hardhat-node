import proxy from "express-http-proxy";
import express from "express";
import cors from "cors";
import apicache from "apicache";
import { providers } from "@0xsequence/multicall";
import { ethers } from "ethers";
import { ERC20__factory } from "./types";
import { formatEther } from "ethers/lib/utils";

const app = express();

const cache = apicache.middleware;

app.set("trust proxy", true);

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.use(express.json());
app.use(cors());

const mainnetProvider = new providers.MulticallProvider(
  new ethers.providers.StaticJsonRpcProvider(
    "https://eth-mainnet.alchemyapi.io/v2/Ew27_E0Lg-8griqid-h-59j5MNwZ6hjE"
  )
);

const BRIBE_TOKEN_ADDRESS = "0xd4e12b224c316664ebb647f69abc1fb8bb2697c7";
const MULTISIG_ADDRESS = "0x2a98ad073b60b4e01de07709cde736b9fc95f7ef";

const bribeToken = ERC20__factory.connect(BRIBE_TOKEN_ADDRESS, mainnetProvider);

app.use("/circulatingsupply", async (req, res) => {
  const circulating = (await bribeToken.totalSupply()).sub(
    await bribeToken.balanceOf(MULTISIG_ADDRESS)
  );
  res.status(200).send(formatEther(circulating));
});

app.use(
  "/",
  cache(
    "13 seconds",
    (req, res) => req.body.method != "eth_blockNumber", // req.body.method !=
    //   "eth_getBalance" /* && req.body.method != "eth_getBlockByNumber" */,
    {
      statusCodes: { include: [200] },
      appendKey: (req, res) => {
        return req.body.method + JSON.stringify(req.body?.params);
      },
    }
  ),
  proxy("http://bribe-node:8545", {
    filter: function (req, res) {
      console.log(req.body);
      console.log(JSON.stringify(req.body?.params)?.length);
      if (req.body && req.body.params) {
        return JSON.stringify(req.body.params).length < 9000;
      }
      // !((JSON.stringify(req.body?.params)?.length || 0) < 7000);
      return true;
    },
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
      // proxyReqOpts.credentials = true;
      return proxyReqOpts;
    },
  })
);

app.listen(4000, () => console.log("server started"));
