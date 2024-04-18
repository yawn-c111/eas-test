// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

interface ISample721Offchain is IERC721Metadata {
    function mintByMinter(address to, string calldata _tokenURI) external;
    function burn(uint256 amount) external;

    event MintByMinter(address indexed by, address indexed to, uint256 indexed tokenId, string tokenURI, uint256 balance);
    event Burn(address indexed from, uint256 indexed tokenId, uint256 indexed balance);
}

