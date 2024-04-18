// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

interface ISample721Onchain is IERC721Metadata {
    struct TokenURIParam {
        string name;
        string description;
        string image;
    }

    function mintByMinter(address to, TokenURIParam calldata tokenURIParam) external;
    function burn(uint256 amount) external;

    event MintByMinter(address indexed by, address indexed to, uint256 indexed tokenId, TokenURIParam tokenURIParam, uint256 balance);
    event Burn(address indexed from, uint256 indexed tokenId, uint256 indexed balance);
}

