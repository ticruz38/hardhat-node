/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FeeDistribution,
  FeeDistributionInterface,
} from "../FeeDistribution";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "feeAsset_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "receivedFees",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFeesReceived",
        type: "uint256",
      },
    ],
    name: "ClaimFees",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeShare",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "FeesTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RescueFunds",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentAllocPoint",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAllocPoint",
        type: "uint256",
      },
    ],
    name: "SetFeeReceiver",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IFeeDistributor[]",
        name: "pools",
        type: "address[]",
      },
    ],
    name: "claimFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "distributeFeeTo",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingReward",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeAsset",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "feeReceiverData",
    outputs: [
      {
        internalType: "uint128",
        name: "pendingReward",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "allocPoint",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "lastPricePerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pricePerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "rescueFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        internalType: "uint128[]",
        name: "allocPoints",
        type: "uint128[]",
      },
    ],
    name: "setFeeReceivers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocPoints",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalFeesReceived",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161180638038061180683398101604081905261002f916100e0565b600080546001600160a01b031916339081178255604051909182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506000805460ff60a01b191690556001600160a01b0381166100cb5760405162461bcd60e51b81526020600482015260116024820152701253959053125117d1915157d054d4d155607a1b604482015260640160405180910390fd5b60601b6001600160601b03191660805261010e565b6000602082840312156100f1578081fd5b81516001600160a01b0381168114610107578182fd5b9392505050565b60805160601c6116b761014f6000396000818161016d0152818161059a015281816106c20152818161084a01528181610a9b0152610b3201526116b76000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063725acc6b116100975780639fbaf3de116100665780639fbaf3de14610201578063ce54749f1461021b578063e53b20171461027d578063f2fde38b1461029057600080fd5b8063725acc6b146101cc5780638456cb59146101df5780638da5cb5b146101e757806399530b06146101f857600080fd5b80634f25cdd0116100d35780634f25cdd01461014757806353ba352c146101685780635c975abb146101a7578063715018a6146101c457600080fd5b80631fa36cbe146100fa5780631fec13241461012a5780633f4ba83a1461013f575b600080fd5b60025461010d906001600160801b031681565b6040516001600160801b0390911681526020015b60405180910390f35b61013d610138366004611391565b6102a3565b005b61013d610453565b61015a610155366004611375565b610487565b604051908152602001610121565b61018f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610121565b600054600160a01b900460ff166040519015158152602001610121565b61013d61060a565b61013d6101da3660046113fa565b61067e565b61013d610a27565b6000546001600160a01b031661018f565b61015a60035481565b60025461010d90600160801b90046001600160801b031681565b610257610229366004611375565b600160208190526000918252604090912080549101546001600160801b0380831692600160801b9004169083565b604080516001600160801b03948516815293909216602084015290820152606001610121565b61013d61028b366004611375565b610a59565b61013d61029e366004611375565b610b97565b6000546001600160a01b031633146102d65760405162461bcd60e51b81526004016102cd90611512565b60405180910390fd5b8281146103145760405162461bcd60e51b815260206004820152600c60248201526b494e56414c49445f53495a4560a01b60448201526064016102cd565b8260005b8181101561044b57600086868381811061034257634e487b7160e01b600052603260045260246000fd5b90506020020160208101906103579190611375565b9050600085858481811061037b57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610390919061145a565b6001600160a01b038316600090815260016020526040902054909150600160801b90046001600160801b0316806103d3576103ce8383600354610c81565b6103e9565b6103dc83610dff565b6103e98383600354610c81565b604080518281526001600160801b03841660208201526001600160a01b038516917fa8b8570404e8df49352df5b74bdc90fd5324556e1ff3f948295101be58b783ff910160405180910390a2505050808061044390611638565b915050610318565b505050505050565b6000546001600160a01b0316331461047d5760405162461bcd60e51b81526004016102cd90611512565b610485610e8f565b565b60008054600160a01b900460ff16156104b25760405162461bcd60e51b81526004016102cd906114e8565b33600081815260016020526040902054600160801b90046001600160801b03166105115760405162461bcd60e51b815260206004820152601060248201526f24a72b20a624a22fa922a1a2a4ab22a960811b60448201526064016102cd565b600254600160801b90046001600160801b03166105315750600092915050565b61053a81610dff565b6001600160a01b0381166000908152600160205260409020546001600160801b0316915081156105c1576001600160a01b03808216600090815260016020526040902080546fffffffffffffffffffffffffffffffff191690556105c1907f0000000000000000000000000000000000000000000000000000000000000000168484610f2c565b604080518381524260208201526001600160a01b038316917fe9bbb2ea7be1fc3aede60ef8c3a5f51c3c98c5c8e4fe2468d4adb219e53c706a910160405180910390a250919050565b6000546001600160a01b031633146106345760405162461bcd60e51b81526004016102cd90611512565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b600054600160a01b900460ff16156106a85760405162461bcd60e51b81526004016102cd906114e8565b6040516370a0823160e01b815230600482015281906000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561070c57600080fd5b505afa158015610720573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107449190611481565b90506000805b838110156108285761080186868381811061077557634e487b7160e01b600052603260045260246000fd5b905060200201602081019061078a9190611375565b6001600160a01b031663476343ee6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156107c457600080fd5b505af11580156107d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fc9190611481565b610f83565b610814906001600160801b031683611572565b91508061082081611638565b91505061074a565b506040516370a0823160e01b8152306004820152819083906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b15801561088c57600080fd5b505afa1580156108a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c49190611481565b6108ce91906115f1565b101561090c5760405162461bcd60e51b815260206004820152600d60248201526c494e56414c49445f434c41494d60981b60448201526064016102cd565b61091581610f83565b60028054601090610937908490600160801b90046001600160801b0316611547565b82546101009290920a6001600160801b03818102199093169183160217909155600254161515905061099a5760405162461bcd60e51b815260206004820152600c60248201526b4e4f5f52454345495645525360a01b60448201526064016102cd565b6002546001600160801b03166109b564e8d4a51000836115aa565b6109bf919061158a565b600360008282546109d09190611572565b909155505060025460408051838152600160801b9092046001600160801b031660208301527fcbf6196d7bebcbaaf53f321eecb5b4f39479879f3996f828f10012708a9442d7910160405180910390a15050505050565b6000546001600160a01b03163314610a515760405162461bcd60e51b81526004016102cd90611512565b610485610fec565b6000546001600160a01b03163314610a835760405162461bcd60e51b81526004016102cd90611512565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b158015610ae557600080fd5b505afa158015610af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1d9190611481565b90508015610b9357610b596001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168383610f2c565b60408051308152602081018390527f891d905c747e7308f7e952ff603f2ac799bc5abc150b5792024a59b5c96273d2910160405180910390a15b5050565b6000546001600160a01b03163314610bc15760405162461bcd60e51b81526004016102cd90611512565b6001600160a01b038116610c265760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102cd565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03831660009081526001602052604090208054600160801b90046001600160801b03168015610d505760028054829190600090610ccf9084906001600160801b03166115c9565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555083600260008282829054906101000a90046001600160801b0316610d179190611547565b82546001600160801b039182166101009390930a9283029282021916919091179091558354868216600160801b02911617835550610da3565b60028054859190600090610d6e9084906001600160801b0316611547565b82546001600160801b039182166101009390930a9283029282021916919091179091558354868216600160801b029116178355505b60018201839055604080516001600160801b038084168252861660208201526001600160a01b038716917fa8b8570404e8df49352df5b74bdc90fd5324556e1ff3f948295101be58b783ff910160405180910390a25050505050565b610e0881611051565b6001600160a01b03821660009081526001602052604081208054909190610e399084906001600160801b0316611547565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060035460016000836001600160a01b03166001600160a01b031681526020019081526020016000206001018190555050565b600054600160a01b900460ff16610edf5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016102cd565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610f7e9084906110df565b505050565b6000600160801b8210610fe85760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20316044820152663238206269747360c81b60648201526084016102cd565b5090565b600054600160a01b900460ff16156110165760405162461bcd60e51b81526004016102cd906114e8565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f0f3390565b6001600160a01b03811660009081526001602081905260408220908101549054600160801b90046001600160801b03168261109f64e8d4a5100061109585856115aa565b6107fc919061158a565b90506110d6816001600160801b031664e8d4a51000600354856110c291906115aa565b6110cc919061158a565b6107fc91906115f1565b95945050505050565b6000611134826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111b19092919063ffffffff16565b805190915015610f7e5780806020019051810190611152919061143a565b610f7e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102cd565b60606111c084846000856111ca565b90505b9392505050565b60608247101561122b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102cd565b843b6112795760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102cd565b600080866001600160a01b031685876040516112959190611499565b60006040518083038185875af1925050503d80600081146112d2576040519150601f19603f3d011682016040523d82523d6000602084013e6112d7565b606091505b50915091506112e78282866112f2565b979650505050505050565b606083156113015750816111c3565b8251156113115782518084602001fd5b8160405162461bcd60e51b81526004016102cd91906114b5565b60008083601f84011261133c578182fd5b50813567ffffffffffffffff811115611353578182fd5b6020830191508360208260051b850101111561136e57600080fd5b9250929050565b600060208284031215611386578081fd5b81356111c381611669565b600080600080604085870312156113a6578283fd5b843567ffffffffffffffff808211156113bd578485fd5b6113c98883890161132b565b909650945060208701359150808211156113e1578384fd5b506113ee8782880161132b565b95989497509550505050565b6000806020838503121561140c578182fd5b823567ffffffffffffffff811115611422578283fd5b61142e8582860161132b565b90969095509350505050565b60006020828403121561144b578081fd5b815180151581146111c3578182fd5b60006020828403121561146b578081fd5b81356001600160801b03811681146111c3578182fd5b600060208284031215611492578081fd5b5051919050565b600082516114ab818460208701611608565b9190910192915050565b60208152600082518060208401526114d4816040850160208701611608565b601f01601f19169190910160400192915050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006001600160801b0380831681851680830382111561156957611569611653565b01949350505050565b6000821982111561158557611585611653565b500190565b6000826115a557634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156115c4576115c4611653565b500290565b60006001600160801b03838116908316818110156115e9576115e9611653565b039392505050565b60008282101561160357611603611653565b500390565b60005b8381101561162357818101518382015260200161160b565b83811115611632576000848401525b50505050565b600060001982141561164c5761164c611653565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461167e57600080fd5b5056fea26469706673582212204bdcfd38f221cad459e80258f3576705f6c7230f99d8d9fc39f1b4ad3f17475d64736f6c63430008040033";

type FeeDistributionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeDistributionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FeeDistribution__factory extends ContractFactory {
  constructor(...args: FeeDistributionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    feeAsset_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FeeDistribution> {
    return super.deploy(feeAsset_, overrides || {}) as Promise<FeeDistribution>;
  }
  getDeployTransaction(
    feeAsset_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(feeAsset_, overrides || {});
  }
  attach(address: string): FeeDistribution {
    return super.attach(address) as FeeDistribution;
  }
  connect(signer: Signer): FeeDistribution__factory {
    return super.connect(signer) as FeeDistribution__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeDistributionInterface {
    return new utils.Interface(_abi) as FeeDistributionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeeDistribution {
    return new Contract(address, _abi, signerOrProvider) as FeeDistribution;
  }
}
