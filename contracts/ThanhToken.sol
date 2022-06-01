// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";

contract ThanhToken is ERC20 {
    constructor (uint256 initialSupply) ERC20("ThanhLuna", "TL") {
        _mint(msg.sender, initialSupply);
    }
} 