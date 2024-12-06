# Sei Oracle gRPC Example

This repository provides a simple example of how to interact with the Sei Oracle module using **gRPC** in modern JavaScript (ES modules). The example demonstrates how to query:
- **Active Denominations**: Fetches all active denominations being tracked by the Oracle module.
- **Exchange Rates**: Fetches the current exchange rates for all tracked denominations.

## Features

- Uses **@grpc/grpc-js** for gRPC communication.
- Modern **ES modules** syntax (`import`/`export`).
- Built with **yarn**.
- Asynchronous functions for better readability and extensibility.

---

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14 or later)
- **Yarn** (latest version)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sei-oracle-grpc-example.git
   cd sei-oracle-grpc-example
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Ensure your environment can access the Sei gRPC endpoint (`grpc.sei-apis.com:443`).

---

## Usage

1. Modify the `PROTO_PATH` in `script.js` to point to your local copy of `oracle.proto`. Ensure the proto file matches the Sei Oracle module definitions.

2. Run the script:
   ```bash
   node script.js
   ```

### Expected Output

If successful, you should see:
- **Active Denominations**:
  ```plaintext
  Active Denominations: ["uatom", "ubtc", "ueth", "uosmo", "usei"]
  ```

- **Exchange Rates**:
  ```plaintext
  Exchange Rates: [
    {
      denom: "uatom",
      oracle_exchange_rate: {
        exchange_rate: "4502024707887867586",
        last_update: "95878051",
        last_update_timestamp: "1723756978789"
      }
    },
    ...
  ]
  ```

---

## Project Structure

```plaintext
.
├── README.md           # This file
├── package.json        # Project metadata and scripts
├── yarn.lock           # Dependency lock file
├── script.js           # Example code querying Sei's Oracle module
└── oracle.proto        # gRPC definitions for the Sei Oracle module
```

---

## Dependencies

This project uses:
- **[@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js)**: gRPC client for Node.js.
- **[@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader)**: Protobuf file loader for gRPC.

Install them via:
```bash
yarn add @grpc/grpc-js @grpc/proto-loader
```

---

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## References

- [Sei Protocol](https://www.docs.sei.io/)
- [gRPC for Node.js](https://grpc.io/docs/languages/node/)
