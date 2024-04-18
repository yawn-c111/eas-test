// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./ISample1155.sol";

struct TokenURIParam {
    string name;
    string description;
    string image;
}

interface ISample1155Onchain is ISample1155 {
    function register(uint256 tokenId, TokenURIParam calldata tokenURIParam) external;
}