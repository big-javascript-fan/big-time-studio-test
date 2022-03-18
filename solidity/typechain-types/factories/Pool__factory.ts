/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Pool, PoolInterface } from "../Pool";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAt",
        type: "uint256",
      },
    ],
    name: "RewardDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeholder",
        type: "address",
      },
    ],
    name: "rewardOf",
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
    name: "stake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
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
    name: "stakeLists",
    outputs: [
      {
        internalType: "uint256",
        name: "stakesAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakeholder",
        type: "address",
      },
    ],
    name: "stakeOf",
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
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unStake",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "updateReward",
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
];

const _bytecode =
  "0x60806040526001805561032060025560006003553480156200002057600080fd5b50620000456000801b620000396200004b60201b60201c565b6200005360201b60201c565b620001c4565b600033905090565b6200006582826200006960201b60201c565b5050565b6200007b82826200015a60201b60201c565b6200015657600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620000fb6200004b60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611bdc80620001d46000396000f3fe6080604052600436106100e85760003560e01c80633d18b9121161008a57806391d148541161005957806391d1485414610335578063a217fddf14610372578063d0e30db01461039d578063d547741f146103a7576100e8565b80633d18b91214610253578063426233601461027e5780635d3eea91146102bb578063632447c9146102f8576100e8565b8063248a9ca3116100c6578063248a9ca3146101a65780632f2ff15d146101e357806336568abe1461020c5780633a4b66f114610235576100e8565b806301ffc9a7146100ed578063168f83bb1461012a5780631d62ebd914610169575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f91906112d0565b6103d0565b604051610121919061152e565b60405180910390f35b34801561013657600080fd5b50610151600480360381019061014c9190611242565b61044a565b604051610160939291906116aa565b60405180910390f35b34801561017557600080fd5b50610190600480360381019061018b9190611242565b610474565b60405161019d9190611666565b60405180910390f35b3480156101b257600080fd5b506101cd60048036038101906101c8919061126b565b6104c5565b6040516101da9190611549565b60405180910390f35b3480156101ef57600080fd5b5061020a60048036038101906102059190611294565b6104e4565b005b34801561021857600080fd5b50610233600480360381019061022e9190611294565b61050d565b005b61023d610590565b60405161024a919061152e565b60405180910390f35b34801561025f57600080fd5b5061026861065a565b604051610275919061152e565b60405180910390f35b34801561028a57600080fd5b506102a560048036038101906102a09190611242565b6107f5565b6040516102b29190611666565b60405180910390f35b3480156102c757600080fd5b506102e260048036038101906102dd91906112f9565b610846565b6040516102ef919061152e565b60405180910390f35b34801561030457600080fd5b5061031f600480360381019061031a9190611242565b6109e2565b60405161032c9190611666565b60405180910390f35b34801561034157600080fd5b5061035c60048036038101906103579190611294565b610ac8565b604051610369919061152e565b60405180910390f35b34801561037e57600080fd5b50610387610b32565b6040516103949190611549565b60405180910390f35b6103a5610b39565b005b3480156103b357600080fd5b506103ce60048036038101906103c99190611294565b610ba3565b005b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610443575061044282610bcc565b5b9050919050565b60046020528060005260406000206000915090508060000154908060010154908060020154905083565b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010154915050919050565b6000806000838152602001908152602001600020600101549050919050565b6104ed826104c5565b6104fe816104f9610c36565b610c3e565b6105088383610cdb565b505050565b610515610c36565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610582576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057990611646565b60405180910390fd5b61058c8282610dbb565b5050565b600080349050600081116105d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d0906115a6565b60405180910390fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610625336109e2565b8160010181905550818160000160008282546106419190611708565b9250508190555042816002018190555060019250505090565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506106a7336109e2565b81600101819055506000816001015414156106f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ee90611626565b60405180910390fd5b6000816001015490508060035411610744576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073b906115c6565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561078a573d6000803e3d6000fd5b50600082600101819055504282600201819055503373ffffffffffffffffffffffffffffffffffffffff167fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486826040516107e49190611666565b60405180910390a260019250505090565b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060000154915050919050565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816000015414156108d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c9906115e6565b60405180910390fd5b60008311610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090c906115a6565b60405180910390fd5b806000015483111561095c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095390611606565b60405180910390fd5b610965336109e2565b81600101819055508281600001600082825461098191906117e9565b925050819055504281600201819055503373ffffffffffffffffffffffffffffffffffffffff166108fc849081150290604051600060405180830381858888f193505050501580156109d7573d6000803e3d6000fd5b506001915050919050565b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600001541415610a40578060010154915050610ac3565b610abf610aac612710610a9e600254610a90600154610a828860000154610a748a6002015442610e9c90919063ffffffff16565b610eb290919063ffffffff16565b610eb290919063ffffffff16565b610ec890919063ffffffff16565b610ec890919063ffffffff16565b8260010154610ede90919063ffffffff16565b9150505b919050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b6000801b610b4e81610b49610c36565b610c3e565b3460036000828254610b609190611708565b925050819055507f31c02a6054dede7dce295df50741d3944c4a5f956201e8f28012ce6b9b9736b83442604051610b98929190611681565b60405180910390a150565b610bac826104c5565b610bbd81610bb8610c36565b610c3e565b610bc78383610dbb565b505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b610c488282610ac8565b610cd757610c6d8173ffffffffffffffffffffffffffffffffffffffff166014610ef4565b610c7b8360001c6020610ef4565b604051602001610c8c9291906114f4565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cce9190611564565b60405180910390fd5b5050565b610ce58282610ac8565b610db757600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d5c610c36565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610dc58282610ac8565b15610e9857600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e3d610c36565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60008183610eaa91906117e9565b905092915050565b60008183610ec0919061178f565b905092915050565b60008183610ed6919061175e565b905092915050565b60008183610eec9190611708565b905092915050565b606060006002836002610f07919061178f565b610f119190611708565b67ffffffffffffffff811115610f50577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f825781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610fe0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061106a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026110aa919061178f565b6110b49190611708565b90505b60018111156111a0577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811061111c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b828281518110611159577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080611199906118ce565b90506110b7565b50600084146111e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111db90611586565b60405180910390fd5b8091505092915050565b6000813590506111fd81611b4a565b92915050565b60008135905061121281611b61565b92915050565b60008135905061122781611b78565b92915050565b60008135905061123c81611b8f565b92915050565b60006020828403121561125457600080fd5b6000611262848285016111ee565b91505092915050565b60006020828403121561127d57600080fd5b600061128b84828501611203565b91505092915050565b600080604083850312156112a757600080fd5b60006112b585828601611203565b92505060206112c6858286016111ee565b9150509250929050565b6000602082840312156112e257600080fd5b60006112f084828501611218565b91505092915050565b60006020828403121561130b57600080fd5b60006113198482850161122d565b91505092915050565b61132b8161182f565b82525050565b61133a8161183b565b82525050565b600061134b826116e1565b61135581856116ec565b935061136581856020860161189b565b61136e81611956565b840191505092915050565b6000611384826116e1565b61138e81856116fd565b935061139e81856020860161189b565b80840191505092915050565b60006113b76020836116ec565b91506113c282611967565b602082019050919050565b60006113da6034836116ec565b91506113e582611990565b604082019050919050565b60006113fd601d836116ec565b9150611408826119df565b602082019050919050565b60006114206008836116ec565b915061142b82611a08565b602082019050919050565b60006114436038836116ec565b915061144e82611a31565b604082019050919050565b60006114666017836116fd565b915061147182611a80565b601782019050919050565b6000611489600a836116ec565b915061149482611aa9565b602082019050919050565b60006114ac6011836116fd565b91506114b782611ad2565b601182019050919050565b60006114cf602f836116ec565b91506114da82611afb565b604082019050919050565b6114ee81611891565b82525050565b60006114ff82611459565b915061150b8285611379565b91506115168261149f565b91506115228284611379565b91508190509392505050565b60006020820190506115436000830184611322565b92915050565b600060208201905061155e6000830184611331565b92915050565b6000602082019050818103600083015261157e8184611340565b905092915050565b6000602082019050818103600083015261159f816113aa565b9050919050565b600060208201905081810360008301526115bf816113cd565b9050919050565b600060208201905081810360008301526115df816113f0565b9050919050565b600060208201905081810360008301526115ff81611413565b9050919050565b6000602082019050818103600083015261161f81611436565b9050919050565b6000602082019050818103600083015261163f8161147c565b9050919050565b6000602082019050818103600083015261165f816114c2565b9050919050565b600060208201905061167b60008301846114e5565b92915050565b600060408201905061169660008301856114e5565b6116a360208301846114e5565b9392505050565b60006060820190506116bf60008301866114e5565b6116cc60208301856114e5565b6116d960408301846114e5565b949350505050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061171382611891565b915061171e83611891565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611753576117526118f8565b5b828201905092915050565b600061176982611891565b915061177483611891565b92508261178457611783611927565b5b828204905092915050565b600061179a82611891565b91506117a583611891565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156117de576117dd6118f8565b5b828202905092915050565b60006117f482611891565b91506117ff83611891565b925082821015611812576118116118f8565b5b828203905092915050565b600061182882611871565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156118b957808201518184015260208101905061189e565b838111156118c8576000848401525b50505050565b60006118d982611891565b915060008214156118ed576118ec6118f8565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f54686520616d6f756e7420746f206265207472616e736665727265642073686f60008201527f756c64206265206c6172676572207468616e2030000000000000000000000000602082015250565b7f52657761726420706f6f6c206973206e6f7420656e6f756768206e6f77000000600082015250565b7f4e6f207374616b65000000000000000000000000000000000000000000000000600082015250565b7f54686520616d6f756e7420746f206265207472616e736665727265642073686f60008201527f756c64206265206c657373207468616e204465706f7369740000000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f4e6f207265776172647300000000000000000000000000000000000000000000600082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b611b538161181d565b8114611b5e57600080fd5b50565b611b6a8161183b565b8114611b7557600080fd5b50565b611b8181611845565b8114611b8c57600080fd5b50565b611b9881611891565b8114611ba357600080fd5b5056fea26469706673582212200f14fc7295d64bfe670898fceb8cca523af70969346733e7796e48e6b266f95d64736f6c63430008010033";

export class Pool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Pool> {
    return super.deploy(overrides || {}) as Promise<Pool>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Pool {
    return super.attach(address) as Pool;
  }
  connect(signer: Signer): Pool__factory {
    return super.connect(signer) as Pool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolInterface {
    return new utils.Interface(_abi) as PoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Pool {
    return new Contract(address, _abi, signerOrProvider) as Pool;
  }
}
