import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

// Load the protobuf definitions
const PROTO_PATH = "./oracle.proto"; // Path to your oracle.proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const oracleProto = grpc.loadPackageDefinition(packageDefinition).seiprotocol.seichain.oracle;

// Define the gRPC server address
const GRPC_SERVER = "grpc.sei-apis.com:443";

// Create a gRPC client with TLS credentials
const client = new oracleProto.Query(
  GRPC_SERVER,
  grpc.credentials.createSsl()
);

// Query Active Denominations
const getActiveDenominations = async () => {
  return new Promise((resolve, reject) => {
    client.Actives({}, (error, response) => {
      if (error) {
        reject(`Error fetching active denominations: ${error.message}`);
      } else {
        resolve(response.actives);
      }
    });
  });
};

// Query Exchange Rates
const getExchangeRates = async () => {
  return new Promise((resolve, reject) => {
    client.ExchangeRates({}, (error, response) => {
      if (error) {
        reject(`Error fetching exchange rates: ${error.message}`);
      } else {
        resolve(response.denom_oracle_exchange_rate_pairs);
      }
    });
  });
};

// Run queries
(async () => {
  try {
    const activeDenominations = await getActiveDenominations();
    console.log("Active Denominations:", activeDenominations);

    const exchangeRates = await getExchangeRates();
    console.log("Exchange Rates:", exchangeRates);
  } catch (error) {
    console.error(error);
  }
})();
