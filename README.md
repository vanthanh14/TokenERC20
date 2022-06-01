# ERC TOKEN PROJECT
The project shows you how to complete an erc20 token and airdroping for many wallets on the registration.
## Setup
* npm init -y
* npm install --save-dev hardhat
* npx hardhat
* npm install --save-dev chai
* npm install keccak256 marketreejs
* npm install --save-dev @nomiclabs/hardhat-ethers @nomiclabs/hardhat-waffle

## Implements
```
npx hardhat compile
```

*Deploy to ropsten testnet*
```
npx hardhat run scrips/deploy.js --network ropsten
```

*Test case for deploy token*
```
npx hardhat test test/test.js
```

*Test case for airdrop token*
```
npx hardhat test test/airdrop.test.js
```

*Check my contract at the address*
`0xf324f824F5e6917962aDEBaC77A1c4571BaBE153`
## Information
All about erc20 token https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20


