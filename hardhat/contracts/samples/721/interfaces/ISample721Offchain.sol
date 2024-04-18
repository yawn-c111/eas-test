// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./ISample721.sol";

interface ISample721Offchain is ISample721 {
    function mintByAdmin(address to, string calldata _tokenURI) external;

    event MintByAdmin(address indexed by, address indexed to, uint256 indexed tokenId, string tokenURI, uint256 balance);
}

