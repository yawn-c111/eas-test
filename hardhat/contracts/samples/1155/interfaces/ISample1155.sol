// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";

interface ISample1155 is IERC1155MetadataURI {
    function mintByMinter(address to, uint256 tokenId, uint256 value) external;
    function burn(uint256 tokenId, uint256 value) external;

    event MintByMinter(address indexed to, uint256 indexed tokenId, uint256 value, uint256 balance);
    event Burn(address indexed from, uint256 indexed tokenId, uint256 value, uint256 balance);
}

