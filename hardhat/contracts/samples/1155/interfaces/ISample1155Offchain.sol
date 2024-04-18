// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./ISample1155.sol";

interface ISample1155Offchain is ISample1155 {
    function register(uint256 tokenId, string calldata _tokenURI) external;
}