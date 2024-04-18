// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

interface ISample721 is IERC721Metadata {
    function burn(uint256 amount) external;

    event Burn(address indexed from, uint256 indexed tokenId, uint256 indexed balance);
}

