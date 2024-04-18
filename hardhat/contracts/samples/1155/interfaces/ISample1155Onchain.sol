// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";

struct TokenURIParam {
    string name;
    string description;
    string image;
}

interface ISample1155Onchain is IERC1155MetadataURI {
    function register(uint256 tokenId, TokenURIParam calldata tokenURIParam) external;
    function mintByMinter(address to, uint256 tokenId, uint256 value) external;
    function burn(uint256 tokenId, uint256 value) external;

    event MintByMinter(address indexed to, uint256 indexed tokenId, uint256 value, uint256 balance);
    event Burn(address indexed from, uint256 indexed tokenId, uint256 value, uint256 balance);
}