import { Network, IBCChainConfig } from "../../../entities";

export const SIFCHAIN_TESTNET: IBCChainConfig = {
  network: Network.SIFCHAIN,
  chainType: "ibc",
  displayName: "Sifchain",
  blockExplorerUrl: "https://blockexplorer-testnet.sifchain.finance",
  nativeAssetSymbol: "rowan",
  chainId: "sifchain-testnet",
  rpcUrl: "https://rpc-testnet.sifchain.finance",
  restUrl: "https://api-testnet.sifchain.finance",
  keplrChainInfo: {
    chainName: "Sifchain testnet",
    chainId: "sifchain-testnet",
    rpc: "https://rpc-testnet.sifchain.finance",
    rest: "https://api-testnet.sifchain.finance",
    stakeCurrency: {
      coinDenom: "ROWAN",
      coinMinimalDenom: "rowan",
      coinDecimals: 18,
    },
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "sif",
      bech32PrefixAccPub: "sifpub",
      bech32PrefixValAddr: "sifvaloper",
      bech32PrefixValPub: "sifvaloperpub",
      bech32PrefixConsAddr: "sifvalcons",
      bech32PrefixConsPub: "sifvalconspub",
    },
    currencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
      },
    ],
    coinType: 118,
    gasPriceStep: {
      low: 5000000000000,
      average: 6500000000000,
      high: 8000000000000,
    },
    features: ["stargate", "ibc-transfer"],
  },
};