/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { FundMe, FundMeInterface } from "../../contracts/FundMe";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "priceFeedAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FundMe__CallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "FundMe__NotEnoughValue",
    type: "error",
  },
  {
    inputs: [],
    name: "FundMe__NotOwner",
    type: "error",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MINIMUM_USD",
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
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "funder",
        type: "address",
      },
    ],
    name: "getAddressToAmountFunded",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getFunder",
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
    name: "getOwner",
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
    name: "getPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610f83380380610f8383398181016040528101906100329190610110565b3373ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061013d565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100dd826100b2565b9050919050565b6100ed816100d2565b81146100f857600080fd5b50565b60008151905061010a816100e4565b92915050565b600060208284031215610126576101256100ad565b5b6000610134848285016100fb565b91505092915050565b608051610e2461015f6000396000818161032601526105d00152610e246000f3fe6080604052600436106100745760003560e01c8063893d20e81161004e578063893d20e81461010c5780639e87a5cd14610137578063b60d428814610162578063d7b4750c1461016c57610083565b80630343fb251461008d5780633ccfd60b146100ca5780636b69a592146100e157610083565b36610083576100816101a9565b005b61008b6101a9565b005b34801561009957600080fd5b506100b460048036038101906100af9190610845565b6102db565b6040516100c1919061088b565b60405180910390f35b3480156100d657600080fd5b506100df610324565b005b3480156100ed57600080fd5b506100f66105bf565b604051610103919061088b565b60405180910390f35b34801561011857600080fd5b506101216105cc565b60405161012e91906108b5565b60405180910390f35b34801561014357600080fd5b5061014c6105f4565b604051610159919061092f565b60405180910390f35b61016a6101a9565b005b34801561017857600080fd5b50610193600480360381019061018e9190610976565b61061e565b6040516101a091906108b5565b60405180910390f35b6802b5e3af16b18800006101e8600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff163461066590919063ffffffff16565b1015610220576040517f44bbaf8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102d291906109d2565b92505081905550565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103a9576040517f579610db00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008080548060200260200160405190810160405280929190818152602001828054801561042c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103e2575b5050505050905060005b81518110156104b757600082828151811061045457610453610a28565b5b602002602001015190506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505080806104af90610a57565b915050610436565b50600067ffffffffffffffff8111156104d3576104d2610aa0565b5b6040519080825280602002602001820160405280156105015781602001602082028036833780820191505090505b506000908051906020019061051792919061073b565b5060003373ffffffffffffffffffffffffffffffffffffffff164760405161053e90610b00565b60006040518083038185875af1925050503d806000811461057b576040519150601f19603f3d011682016040523d82523d6000602084013e610580565b606091505b50509050806105bb576040517fa6139a6400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6802b5e3af16b188000081565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080828154811061063357610632610a28565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806106718361069b565b9050670de0b6b3a764000084826106889190610b15565b6106929190610b9e565b91505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156106e457600080fd5b505afa1580156106f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071c9190610c5c565b5050509150506402540be400816107339190610cd7565b915050919050565b8280548282559060005260206000209081019282156107b4579160200282015b828111156107b35782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061075b565b5b5090506107c191906107c5565b5090565b5b808211156107de5760008160009055506001016107c6565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610812826107e7565b9050919050565b61082281610807565b811461082d57600080fd5b50565b60008135905061083f81610819565b92915050565b60006020828403121561085b5761085a6107e2565b5b600061086984828501610830565b91505092915050565b6000819050919050565b61088581610872565b82525050565b60006020820190506108a0600083018461087c565b92915050565b6108af81610807565b82525050565b60006020820190506108ca60008301846108a6565b92915050565b6000819050919050565b60006108f56108f06108eb846107e7565b6108d0565b6107e7565b9050919050565b6000610907826108da565b9050919050565b6000610919826108fc565b9050919050565b6109298161090e565b82525050565b60006020820190506109446000830184610920565b92915050565b61095381610872565b811461095e57600080fd5b50565b6000813590506109708161094a565b92915050565b60006020828403121561098c5761098b6107e2565b5b600061099a84828501610961565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006109dd82610872565b91506109e883610872565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a1d57610a1c6109a3565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610a6282610872565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a9557610a946109a3565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610aea600083610acf565b9150610af582610ada565b600082019050919050565b6000610b0b82610add565b9150819050919050565b6000610b2082610872565b9150610b2b83610872565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610b6457610b636109a3565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610ba982610872565b9150610bb483610872565b925082610bc457610bc3610b6f565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610bee81610bcf565b8114610bf957600080fd5b50565b600081519050610c0b81610be5565b92915050565b6000819050919050565b610c2481610c11565b8114610c2f57600080fd5b50565b600081519050610c4181610c1b565b92915050565b600081519050610c568161094a565b92915050565b600080600080600060a08688031215610c7857610c776107e2565b5b6000610c8688828901610bfc565b9550506020610c9788828901610c32565b9450506040610ca888828901610c47565b9350506060610cb988828901610c47565b9250506080610cca88828901610bfc565b9150509295509295909350565b6000610ce282610c11565b9150610ced83610c11565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615610d2c57610d2b6109a3565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615610d6957610d686109a3565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610da657610da56109a3565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615610de357610de26109a3565b5b82820290509291505056fea26469706673582212208584b92de715c57f6c7c0629c3ad79404dcaddcfa380a5d8afa646c202c645ee64736f6c63430008090033";

type FundMeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundMeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundMe__factory extends ContractFactory {
  constructor(...args: FundMeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    priceFeedAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FundMe> {
    return super.deploy(priceFeedAddress, overrides || {}) as Promise<FundMe>;
  }
  override getDeployTransaction(
    priceFeedAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(priceFeedAddress, overrides || {});
  }
  override attach(address: string): FundMe {
    return super.attach(address) as FundMe;
  }
  override connect(signer: Signer): FundMe__factory {
    return super.connect(signer) as FundMe__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundMeInterface {
    return new utils.Interface(_abi) as FundMeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundMe {
    return new Contract(address, _abi, signerOrProvider) as FundMe;
  }
}