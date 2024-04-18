// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "./ISample721.sol";

interface ISample721Onchain is ISample721 {
    struct TokenURIParam {
        string name;
        string description;
        string image;
    }

    function mintByAdmin(address to, TokenURIParam calldata tokenURIParam) external;

    event MintByAdmin(address indexed by, address indexed to, uint256 indexed tokenId, TokenURIParam tokenURIParam, uint256 balance);
}

