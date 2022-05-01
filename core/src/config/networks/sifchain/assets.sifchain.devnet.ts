import { ChainAssetConfig } from "./types";

const assets: ChainAssetConfig = {
  assets: [
    {
      symbol: "rowan",
      decimals: 18,
      name: "Rowan",
      imageUrl: "./images/siflogo.png",
      network: "sifchain",
      displaySymbol: "rowan",
      homeNetwork: "sifchain",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707",
      name: "Tether USDT",
      network: "sifchain",
      symbol: "cusdt",
      displaySymbol: "usdt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
      name: "Ethereum",
      network: "sifchain",
      symbol: "ceth",
      displaySymbol: "eth",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png?1547034427",
      name: "Basic Attention Token",
      network: "sifchain",
      symbol: "cbat",
      displaySymbol: "bat",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/681/thumb/JelZ58cv_400x400.png?1601449653",
      name: "Aragon",
      network: "sifchain",
      symbol: "cant",
      displaySymbol: "ant",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/736/thumb/bancor.png?1547034477",
      name: "Bancor Network Token",
      network: "sifchain",
      symbol: "cbnt",
      displaySymbol: "bnt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/863/thumb/0x.png?1547034672",
      name: "0x",
      network: "sifchain",
      symbol: "czrx",
      displaySymbol: "zrx",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png?1547034700",
      name: "Chainlink",
      network: "sifchain",
      symbol: "clink",
      displaySymbol: "link",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png?1550108745",
      name: "Decentraland",
      network: "sifchain",
      symbol: "cmana",
      displaySymbol: "mana",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/913/thumb/LRC.png?1572852344",
      name: "Loopring",
      network: "sifchain",
      symbol: "clrc",
      displaySymbol: "lrc",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png?1547035078",
      name: "Enjin Coin",
      network: "sifchain",
      symbol: "cenj",
      displaySymbol: "enj",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png?1598631139",
      name: "Synthetix Network Token",
      network: "sifchain",
      symbol: "csnx",
      displaySymbol: "snx",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3449/thumb/TUSD.png?1559172762",
      name: "TrueUSD",
      network: "sifchain",
      symbol: "ctusd",
      displaySymbol: "tusd",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg?1547038686",
      name: "Ocean Protocol",
      network: "sifchain",
      symbol: "cocean",
      displaySymbol: "ocean",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png?1558015016",
      name: "Fantom",
      network: "sifchain",
      symbol: "cftm",
      displaySymbol: "ftm",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/5013/thumb/sUSD.png?1562212426",
      name: "sUSD",
      network: "sifchain",
      symbol: "csusd",
      displaySymbol: "susd",
      homeNetwork: "ethereum",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png?1547042389",
      name: "USD Coin",
      network: "sifchain",
      symbol: "cusdc",
      displaySymbol: "usdc",
      homeNetwork: "ethereum",
    },
    {
      decimals: 8,
      imageUrl:
        "https://assets.coingecko.com/coins/images/7310/thumb/cypto.png?1547043960",
      name: "Crypto com Coin",
      network: "sifchain",
      symbol: "ccro",
      displaySymbol: "CRO (ERC-20)",
      homeNetwork: "ethereum",
      decommissioned: true,
      decommissionReason:
        "Crypto.org's ERC-20 token has been decommissioned on Sifchain in favor of the Cosmos CRO token. Please export all CRO (ERC-20) off of Sifchain.",
    },
    {
      decimals: 8,
      imageUrl:
        "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744",
      name: "Wrapped Bitcoin",
      network: "sifchain",
      symbol: "cwbtc",
      displaySymbol: "wbtc",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9368/thumb/swipe.png?1566792311",
      name: "Swipe",
      network: "sifchain",
      symbol: "csxp",
      displaySymbol: "sxp",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9545/small/Band_token_blue_violet_token.png?1625881431",
      name: "Band Protocol",
      network: "sifchain",
      symbol: "cband",
      displaySymbol: "Band (ERC-20)",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9956/thumb/dai-multi-collateral-mcd.png?1574218774",
      name: "Dai Stablecoin",
      network: "sifchain",
      symbol: "cdai",
      displaySymbol: "dai",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png?1592625425",
      name: "Compound",
      network: "sifchain",
      symbol: "ccomp",
      displaySymbol: "comp",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/10951/thumb/UMA.png?1586307916",
      name: "UMA",
      network: "sifchain",
      symbol: "cuma",
      displaySymbol: "uma",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11683/thumb/Balancer.png?1592792958",
      name: "Balancer",
      network: "sifchain",
      symbol: "cbal",
      displaySymbol: "bal",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330",
      name: "yearn finance",
      network: "sifchain",
      symbol: "cyfi",
      displaySymbol: "yfi",
      homeNetwork: "ethereum",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11970/thumb/serum-logo.png?1597121577",
      name: "Serum",
      network: "sifchain",
      symbol: "csrm",
      displaySymbol: "srm",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11976/thumb/Cream.png?1596593418",
      name: "Cream",
      network: "sifchain",
      symbol: "ccream",
      displaySymbol: "cream",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg?1597397942",
      name: "SAND",
      network: "sifchain",
      symbol: "csand",
      displaySymbol: "sand",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png?1606986688",
      name: "Sushi",
      network: "sifchain",
      symbol: "csushi",
      displaySymbol: "sushi",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12440/thumb/esd_logo_circle.png?1603676421",
      name: "Empty Set Dollar",
      network: "sifchain",
      symbol: "cesd",
      displaySymbol: "esd",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604",
      name: "Uniswap",
      network: "sifchain",
      symbol: "cuni",
      displaySymbol: "uni",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110",
      name: "Aave",
      network: "sifchain",
      symbol: "caave",
      displaySymbol: "aave",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12811/thumb/barnbridge.jpg?1602728853",
      name: "BarnBridge",
      network: "sifchain",
      symbol: "cbond",
      displaySymbol: "bond",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13238/thumb/WFIL-Icon.png?1606630561",
      name: "Wrapped Filecoin",
      network: "sifchain",
      symbol: "cwfil",
      displaySymbol: "wfil",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png?1608145566",
      name: "The Graph",
      network: "sifchain",
      symbol: "cgrt",
      displaySymbol: "grt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13454/thumb/lon_logo.png?1608701720",
      name: "Tokenlon",
      network: "sifchain",
      symbol: "clon",
      displaySymbol: "lon",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png?1608803028",
      name: "1inch",
      network: "sifchain",
      symbol: "c1inch",
      displaySymbol: "1inch",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13677/thumb/BrMhBTr8_400x400.jpg?1610723303",
      name: "THORChain ERC20",
      network: "sifchain",
      symbol: "crune",
      displaySymbol: "rune",
      homeNetwork: "ethereum",
    },
    {
      decimals: 6,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13767/thumb/Secret_S_Black_Coingecko.png?1611667298",
      name: "Secret ERC20",
      network: "sifchain",
      symbol: "cwscrt",
      displaySymbol: "wscrt",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3334/small/iotex-logo.png?1547037941",
      name: "IoTeX",
      network: "sifchain",
      symbol: "ciotx",
      displaySymbol: "iotx",
      homeNetwork: "ethereum",
    },
    {
      imageUrl:
        "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
      name: "Reef Finance",
      symbol: "creef",
      network: "sifchain",
      decimals: 18,
      displaySymbol: "reef",
      homeNetwork: "ethereum",
    },
    {
      imageUrl:
        "https://assets.coingecko.com/coins/images/4932/thumb/_QPpjoUi_400x400.jpg?1566430520",
      name: "COCOS BCX",
      symbol: "ccocos",
      network: "sifchain",
      decimals: 18,
      displaySymbol: "cocos",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3373/small/IuNzUb5b_400x400.jpg?1589526336",
      name: "Keep Network",
      network: "sifchain",
      symbol: "ckeep",
      displaySymbol: "keep",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3296/small/op.jpg?1547037878",
      name: "Origin Protocol",
      network: "sifchain",
      symbol: "cogn",
      displaySymbol: "ogn",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12782/small/logocircle.png?1611944557",
      name: "DAOfi",
      network: "sifchain",
      symbol: "cdaofi",
      displaySymbol: "daofi",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12509/small/linear.jpg?1606884470",
      name: "Linear",
      network: "sifchain",
      symbol: "clina",
      displaySymbol: "lina",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/9351/small/12ships.png?1566485390",
      name: "12Ships",
      network: "sifchain",
      symbol: "ctshp",
      displaySymbol: "tshp",
      homeNetwork: "ethereum",
      hasDarkIcon: true,
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/13803/small/b20.png?1611996305",
      name: "B.20",
      network: "sifchain",
      symbol: "cb20",
      displaySymbol: "b20",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/3328/small/Akropolis.png?1547037929",
      name: "Akropolis",
      network: "sifchain",
      symbol: "cakro",
      displaySymbol: "akro",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12623/small/RFUEL_SQR.png?1602481093",
      name: "Rio Fuel Token",
      network: "sifchain",
      symbol: "crfuel",
      displaySymbol: "rfuel",
      homeNetwork: "ethereum",
      hasDarkIcon: true,
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12843/small/image.png?1611212077",
      name: "Rally",
      network: "sifchain",
      symbol: "crly",
      displaySymbol: "rly",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/convergence_32.png",
      name: "Convergence",
      network: "sifchain",
      symbol: "cconv",
      displaySymbol: "conv",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/render_32.png",
      name: "Render Token",
      network: "sifchain",
      symbol: "crndr",
      displaySymbol: "rndr",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/paidnetwork_32.png",
      name: "PAID Network",
      network: "sifchain",
      symbol: "cpaid",
      displaySymbol: "paid",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/14460/small/Tidal-mono.png?1616233894",
      name: "Tidal",
      network: "sifchain",
      symbol: "ctidal",
      displaySymbol: "tidal",
      homeNetwork: "ethereum",
      hasDarkIcon: true,
    },
    {
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/11939/small/SHIBLOGO.png?1600752116",
      name: "SHIBA INU",
      network: "sifchain",
      symbol: "cshib",
      displaySymbol: "shib",
      homeNetwork: "ethereum",
    },
    {
      decimals: 18,
      imageUrl: "https://etherscan.io/token/images/dogekiller_32.png",
      name: "DOGE KILLER",
      network: "sifchain",
      symbol: "cleash",
      displaySymbol: "leash",
      homeNetwork: "ethereum",
    },
    {
      symbol: "uphoton",
      decimals: 6,
      name: "Photon",
      network: "sifchain",
      label: "Photon",
      imageUrl:
        "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
      displaySymbol: "photon",
      homeNetwork: "cosmoshub",
    },
    {
      symbol: "uakt",
      decimals: 6,
      name: "Akash Token",
      network: "sifchain",
      label: "AKT",
      imageUrl:
        "https://assets.coingecko.com/coins/images/12785/small/akash-logo.png?1615447676",
      displaySymbol: "akt",
      homeNetwork: "akash",
    },
    {
      symbol: "uatom",
      decimals: 6,
      name: "Atom",
      network: "sifchain",
      label: "Atom",
      imageUrl:
        "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
      displaySymbol: "atom",
      homeNetwork: "cosmoshub",
    },
    {
      symbol: "udvpn",
      decimals: 6,
      name: "Sentinel",
      network: "sifchain",
      label: "Sentinel",
      imageUrl:
        "https://assets.coingecko.com/coins/images/14879/small/Sentinel_512X512.png?1622174499",
      displaySymbol: "dvpn",
      homeNetwork: "sentinel",
    },
    {
      symbol: "unyan",
      decimals: 6,
      name: "Nyan",
      network: "sifchain",
      label: "Nyan",
      imageUrl:
        "https://assets.coingecko.com/coins/images/5135/small/IRIS.png?1557999365",
      displaySymbol: "nyan",
      homeNetwork: "iris",
    },
    {
      symbol: "basecro",
      displaySymbol: "cro",
      decimals: 8,
      name: "CRO",
      network: "sifchain",
      label: "CRO",
      imageUrl:
        "https://assets.coingecko.com/coins/images/7310/small/cypto.png?1547043960",
      homeNetwork: "crypto-org",
    },
    {
      symbol: "uxprt",
      displaySymbol: "xprt",
      decimals: 6,
      name: "xprt",
      network: "sifchain",
      label: "xprt",
      imageUrl: "https://persistence.one/favicon.png",
      homeNetwork: "persistence",
    },
    {
      symbol: "uregen",
      displaySymbol: "regen",
      decimals: 6,
      name: "regen",
      network: "sifchain",
      label: "regen",
      imageUrl:
        "https://assets.coingecko.com/coins/images/16733/small/REGEN.png?1624861317",
      homeNetwork: "regen",
    },
    {
      address: "0x2701E1D67219a49F5691C92468Fe8D8ADc03e609",
      imageUrl:
        "https://assets.coingecko.com/coins/images/17103/small/DINO.png?1626244014",
      name: "DinoSwap",
      displaySymbol: "DINO",
      symbol: "cdino",
      network: "sifchain",
      homeNetwork: "ethereum",
      decimals: 18,
    },
    {
      symbol: "uosmo",
      displaySymbol: "osmo",
      decimals: 6,
      name: "osmo",
      network: "sifchain",
      label: "osmo",
      imageUrl:
        "https://assets.coingecko.com/coins/images/16724/small/osmosis.jpeg?1624849879",
      homeNetwork: "osmosis",
    },
    {
      symbol: "uluna",
      displaySymbol: "luna",
      decimals: 6,
      name: "luna",
      network: "sifchain",
      label: "luna",
      imageUrl:
        "https://assets.coingecko.com/coins/images/8284/small/luna1557227471663.png?1567147072",
      homeNetwork: "terra",
    },
    {
      symbol: "ubtsg",
      displaySymbol: "btsg",
      decimals: 6,
      name: "btsg",
      network: "sifchain",
      label: "btsg",
      imageUrl:
        "https://assets.coingecko.com/coins/images/5041/small/logo_-_2021-01-10T210801.390.png?1610284134",
      homeNetwork: "bitsong",
    },
    {
      symbol: "ucrbrus",
      displaySymbol: "crbrus",
      decimals: 6,
      name: "crbrus",
      network: "sifchain",
      label: "crbrus",
      imageUrl:
        "https://assets.coingecko.com/coins/images/24509/small/AUdZyrmO_400x400.png?1647931023",
      homeNetwork: "cerberus",
    },
    {
      symbol: "uhuahua",
      displaySymbol: "huahua",
      decimals: 6,
      name: "huahua",
      network: "sifchain",
      label: "huahua",
      imageUrl:
        "https://assets.coingecko.com/coins/images/15651/small/chihua.PNG?1621476950",
      homeNetwork: "chihuahua",
    },
    {
      symbol: "ucmdx",
      displaySymbol: "cmdx",
      decimals: 6,
      name: "cmdx",
      network: "sifchain",
      label: "cmdx",
      imageUrl:
        "https://assets.coingecko.com/coins/images/21540/small/_ooQky6B_400x400.jpg?1639447618",
      homeNetwork: "comdex",
    },
    {
      symbol: "uxki",
      displaySymbol: "xki",
      decimals: 6,
      name: "xki",
      network: "sifchain",
      label: "xki",
      imageUrl:
        "https://assets.coingecko.com/coins/images/15694/small/xki-color.png?1621569714",
      homeNetwork: "ki",
    },
    {
      symbol: "nanolike",
      displaySymbol: "nanolike",
      decimals: 6,
      name: "nanolike",
      network: "sifchain",
      label: "nanolike",
      imageUrl:
        "https://assets.coingecko.com/coins/images/10212/small/likecoin.png?1576640519",
      homeNetwork: "likecoin",
    },
    {
      symbol: "ustarx",
      displaySymbol: "starx",
      decimals: 6,
      name: "starx",
      network: "sifchain",
      label: "starx",
      imageUrl:
        "https://assets.coingecko.com/coins/images/10212/small/likecoin.png?1576640519",
      homeNetwork: "stargaze",
    },
    {
      address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
      decimals: 18,
      imageUrl:
        "https://assets.coingecko.com/coins/images/12681/small/UST.png?1601612407",
      name: "Terra USD",
      label: "Terra USD",
      network: "sifchain",
      displaySymbol: "UST (ERC-20)",
      symbol: "cust",
      homeNetwork: "ethereum",
    },
    {
      symbol: "uusd",
      displaySymbol: "ust",
      decimals: 6,
      name: "TerraUSD",
      network: "sifchain",
      label: "TerraUSD",
      imageUrl:
        "https://assets.coingecko.com/coins/images/12681/small/UST.png?1601612407",
      homeNetwork: "terra",
    },
    {
      symbol: "ujuno",
      displaySymbol: "juno",
      decimals: 6,
      name: "juno",
      network: "sifchain",
      label: "juno",
      imageUrl: "https://junoscan.com/icons/safari-pinned-tab.svg",
      homeNetwork: "juno",
    },
    {
      symbol: "uixo",
      displaySymbol: "ixo",
      decimals: 6,
      name: "ixo",
      network: "sifchain",
      label: "ixo",
      imageUrl: "https://dhj8dql1kzq2v.cloudfront.net/white/ixo.png",
      homeNetwork: "ixo",
    },
    {
      symbol: "uband",
      displaySymbol: "band",
      decimals: 6,
      name: "band",
      network: "sifchain",
      label: "band",
      imageUrl:
        "https://assets.coingecko.com/coins/images/9545/small/Band_token_blue_violet_token.png?1625881431",
      homeNetwork: "band",
    },
    {
      symbol: "nanolike",
      displaySymbol: "like",
      decimals: 9,
      name: "like",
      network: "sifchain",
      homeNetwork: "likecoin",
      label: "like",
      imageUrl:
        "https://assets.coingecko.com/coins/images/10212/small/likecoin.png?1576640519",
    },
    {
      symbol: "uiov",
      displaySymbol: "iov",
      decimals: 6,
      name: "iov",
      network: "sifchain",
      homeNetwork: "starname",
      label: "starname",
      imageUrl:
        "https://assets.coingecko.com/coins/images/12660/small/iov.png?1601862353",
    },
  ],
};

export default assets;
