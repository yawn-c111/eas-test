// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

interface ISample20 is IERC20Metadata {
    function mintByMinter(address to, uint256 amount) external;
    function burn(uint256 amount) external;

    event MintByMinter(address indexed to, uint256 amount, uint256 balance, uint256 totalSupply);
    event Burn(address indexed from, uint256 amount, uint256 balance, uint256 totalSupply);
}