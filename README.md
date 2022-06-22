# WHBAR Landing page

Node version: `16.15.0`

If you use another version, please use [n](https://github.com/tj/n) to manage.

## 📇 WHBAR addresses

### Testnet:
`Address`: `0x0000000000000000000000000000000002be8c90`

`Contract ID`: `0.0.46042256`

### Mainnet:

`Address`: `0x00000000000000000000000000000000000f7e89`

`Contract ID`: `0.0.1015433`

## ✍️ Prerequisites

Copy the config file and put your account and private key to the corresponding network object.

```bash
cp config.sample.js config.js
```

## ⚙️ Installation

```bash
yarn
```

## 🚀 Available Scripts

To start the project, you can run:

```bash
yarn dev
```

To compile and deploy contract:

```bash
npx hardhat compile
npx hardhat deployWhbar
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
