module.exports = {

    // MONGODB_URI: 'mongodb+srv://betygfi:12jJ12%40%40%40%40@betygfi.c1fubpc.mongodb.net/betygfi_dev?retryWrites=true&w=majority',

    MONGODB_URI: 'mongodb+srv://tspadmin:12jJ12%40%40%40%40@tsp.bpg9mjl.mongodb.net/?retryWrites=true&w=majority',

    _MONGODB_URI: 'mongodb://127.0.0.1:27017/testing',

    COINMARKETCAP_KEY: "6945a994-4eaf-486a-9daf-9a20888b0d36",

    INFURA_URL: "https://mainnet.infura.io/v3/0f333401437149e28c3696b36eb02f93",

    DEFI_GOVERNANCE: {

      "aave-v1": "aave.eth",

      "aave-v2": "aave.eth",

      "aave-v3": "aave.eth",

      "uniswap-v1": "uniswap",

      "uniswap-v2": "uniswap",

      "uniswap-v3": "uniswap",

      "lido": "lido-snapshot.eth",

      "convex-finance": "cvx.eth",

      "compound": "comp-vote.eth",

      "rocket-pool": "rocketpool-dao.eth",

      "morpho-compound": "gauges.morpho.eth",

      "morpho-aave": "gauges.morpho.eth",
      "morpho-aavev3": "gauges.morpho.eth",

      "dydx": "dydxgov.eth",

      "yearn-finance": "yearn",

      "stargate": "stgdao.eth",

      "arbitrum": "arbitrumfoundation.eth",

      "aavegotchi": "aavegotchi.eth",

      "gitcoin": "gitcoindao.eth",

      "mantle-treasury": "bitdao.eth",

      "shell-protocol": "shellprotocol.eth",

      "hop-protocol": "hop.eth",

      "qidao": "qidao.eth",

      "zora": "zora.eth",

      "cow-swap": "cow.eth",

      "jade-protocol": "jadeprotocol.eth",

      "paraswap": "paraswap-dao.eth",

      "airswap": "airswap",

      "beefy": "beefydao.eth",

      "shapeshift": "shapeshiftdao.eth",
  "spookyswap": "spookyswap.eth",

      "safe": "safe.eth",

      "yam-finance": "yam.eth",

      "aura": "aurafinance.eth",

      "aladdin-dao": "aladdindao.eth",

      "euler": "eulerdao.eth",



      //  aave_v2_poll: "https://aave-api-v2.aave.com/data/governance-leaderboard?power=vote&first=5&min=1",

      //  aave_v2_ipfs: "https://gateway.pinata.cloud/ipfs/",

    },

    duneQueryIds: {

       getBalance: "2173480",

       getHotFunctions: {

          "aave-v2": "2964979",

       },

       getComposition: {

          "aave-v3": "2928956"

       },
   getUsers: {

          "aave-v1": "2853952",

          "aave-v2": {

             polygon: "2906002",

             avalanche: "2905939"

          },

          "aave-v3": {

             ethereum: "2922340",

             polygon: "2922347",

             optimism: "2922360",

             arbitrum: "2922374",

             avalanche: "2922382",

             fantom: "2922389",

          },

          "lido": {

             ethereum: "3015083",

          },

          "makerdao":{

             ethereum: "3008118",

          },

          "uniswap-v1": {

             ethereum: "3062083",

          },

          "uniswap-v2": {

             ethereum: "3026787",

          },

          "uniswap-v3": {

             ethereum: "3026904",

          },

          "convex-finance": {

             ethereum: "3043974",

             arbitrum: "3044043"

          },

          // compound contains compound and compound v3 //

          "compound": {

  ethereum: "3061486"

          },

          "rocket-pool": {

             ethereum: "3044065"

          },

          "liquity": {

             ethereum: "3044139"

          },

          "coinbase-wrapped-staked-eth": {

             ethereum: "3035003"

          },

          "morpho-compound": {

             ethereum: "3044828"

          },

          // morpho-aave is only morpho-aave-v2 //

          "morpho-aave": {

             ethereum: "3044837"


          },

          "morpho-aavev3": {

             ethereum: "3044848"

          },

          "spark": {

             ethereum: "3024203"

          },

          "dydx": {

             ethereum: "3066529"

          },

          "yearn-finance": {

             ethereum: "3066595",

             optimism: "3066627",

          },

       },

    },


 BLOCKCHAIN_KEYS: {

       ETHERSCAN_API_KEY: '8KJ3ESX1CN828PMT9FC5CUX64WDWC1QGHR',

       POLYGON_API_KEY: 'ABDRC6JRH6VNRDQC2I7M2PB4MR6SDTKCWI',

       GNOSIS_API_KEY: '8JINAJTRC3MUI3HKGAT9E37Z77AX2MBNBP',

       ARBI_API_KEY: 'C6EWJ4T9RC83Z8IN3ZX4GG3188F3GVKJIQ',

       BINANCE_API_KEY: 'TF5FR1GNA8EY788PZV65IQDBW55TDI13EF',

       FANTOM_API_KEY: '6RR4U48TYMVEI172V6NKKMHE8SUZDPSDJZ',

       ARBI_NOVA_API_KEY: 'PB73IPQQ3F6TK1AEDMM7FVESUEKDIVAHH3',

       MOONRIVER_API_KEY: '7A1UUP9FTQCPE133F41A2DWPEIU37B39AQ',

       HECOCHAIN_API_KEY: '',

       OPTIMISM_API_KEY: 'JW4AETBKS1DSXN3729AXUVYD835M83KZG4',

    },

    DUNE_API_KEY: 'UaqjJCO9Uew5IOJeSddpmmJ2lUPWCkmB',

    appConfig: '',

    PORT: process.env.PORT || 4000,

    jwt: {

       secretOrKey: '1312312312',

       algorithm: 'HS256',
expiresIn: 86400,

       issuer: 'JWT',

       audience: ['web', 'app'], // or string

    },



    defillama: {

       protocol: {

          get: 'https://api.llama.fi/protocols'

       }

    }
};