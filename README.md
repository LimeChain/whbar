# WHBAR Landing page

Node version: `16.15.0`

If you use another version, please use [n](https://github.com/tj/n) to manage.

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
