module.exports = {
  networks: {
    loc_insure_insure: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1",
      allowUnlimitedContractSize: true
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.11"
    }
  }
};
