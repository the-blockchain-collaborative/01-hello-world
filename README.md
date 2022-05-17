# 01-hello-world
## Principle 🎓
Welcome to the first technical lab hosted by The Blockchain Collaborative at Baylor University! This course will be taught by Nathan Galindo, and if you have any questions, you can reach him via telegram @nathanzebedee. This first lesson will focus on setting up your local environment for building decentralized blockchain applications (dApps), and will briefly introduce you to the Solidity programming language towards the end as we program a very simple smart contract. 

You will notice that there are two primary folders.
* "finished" is where you will find the finished project. Please use this folder as a reference for how your code should behave.
* "starter" is where you will be building the project yourself.

**To access the video recording of this lesson, please refer to the link: [01-hello-world-video-walkthrough]()** 💫

Note: all technical labs were designed using a macOS environment. If you are not using a macOS environment, some of these processes might be different for you. Please be aware of this moving forward.

## Setup 🛠
You will need a few dependencies to properly configure your local development environment. Please refer to the list below, and follow along with the video as you install the required tools.

* **Node**: Run the following commands in your terminal
    * ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash``` -- this downloads nvm
    * ```nvm version``` -- you should see a number displayed
    * ```nvm install 16``` -- this downloads an appropriate version of node
    * ```nvm use 16``` -- this sets the version of node to use
* **Git**: Run the following commands in your terminal
    * ```brew install git``` -- this installs git
    * ```git``` -- you should see a list of commands
* **Metamask**: Refer to the link provided
    * [Install Metamask](https://metamask.io/)
    * Create an account
* **Soldity**: Run the following commands in your terminal
    * ```npm install -g solc``` -- this installs the Solidity compiler
    * ```solc --version``` -- you should see a number displayed
* **VSCode**: Refer to the link provided
    * [Install VSCode](https://code.visualstudio.com/download)
* **Plugins**: Refer to the "extensions" tab in VSCode and install the following plugins
    * ms-vscode.vscode-typescript-next
    * NomicFoundation.hardhat-solidity
    * JuanBlanco.solidity
    * dsznajder.es7-react-js-snippets

## Dependencies ⚙️
This project will require a few dependencies to be installed. Please refer to the list below, and follow along with the video as you install the required dependencies.

* **Hardhat**: 
    * EVM development environment
    * ```npm install -D hardhat```
* **ethers.js**: 
    * JavaScript library for interacting with EVM smart contracts
    * ```npm install -D @nomiclabs/hardhat-ethers ethers```
* **waffle**: 
    * JavaScript library for testing EVM smart contracts
    * ```npm install -D @nomiclabs/hardhat-waffle ethereum-waffle```
* **chai**: 
    * JavaScript library for testing JavaScript applications
    * ```npm install -D chai```

## Disclaimer ⚠️
This post is for general information purposes only. It does not constitute investment advice or a recommendation or solicitation to buy or sell any investment and should not be used in the evaluation of the merits of making any investment decision. It should not be relied upon for accounting, legal or tax advice or investment recommendations. This post reflects the current opinions of the authors and is not made on behalf of The Blockchain Collaborative or its affiliates and does not necessarily reflect the opinions of The Blockchain Collaborative, its affiliates or individuals associated with The Blockchain Collaborative. The opinions reflected herein are subject to change without being updated.